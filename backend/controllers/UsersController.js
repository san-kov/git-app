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
    const regex = /access_token=(.+)(&scope)/gm
    const str = data.data
    let token = regex.exec(str) && regex.exec(str)[1]

    console.log(token)

    req.body.access_token = token
    next()
  } catch (error) {
    console.log(error)
    next()
  }
}
