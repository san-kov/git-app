import signToken from '../utils/signToken'
import axios from 'axios'
import { githubClientID, githubClientSecret } from '../config/keys'

export const authGithub = ({ user }, res) => {
  res.send({ token: signToken(user) })
}

export const me = ({ user }, res) => {
  res.send(user)
}

export const extractAccessToken = async (req, res, next) => {
  try {
    const data = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: githubClientID,
        client_secret: githubClientSecret,
        code: req.body.code
      }
    )
    const regex = /access_token=(.+)(&scope.+)/gm
    const str = `access_token=b459362c6d87fc858a748fa9656ee512f8738540&scope=user&token_type=bearer`
    let m
    let token

    while ((m = regex.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`)
        if (groupIndex === 1) token = match
      })
    }

    req.body.access_token = token
    next()
  } catch (error) {
    console.log(error)
    next()
  }
}
