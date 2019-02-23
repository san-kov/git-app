import signToken from '../utils/signToken'

export const authGithub = ({ user }, res) => {
  res.send({ token: signToken(user) })
}

export const me = ({ user }, res) => {
  res.send(user)
}
