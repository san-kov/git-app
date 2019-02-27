import client from './client'

export const getUserData = token => {
  return client.get('/users/me')
}

export const login = code => {
  return client.post(`users/auth/github`, { code })
}
