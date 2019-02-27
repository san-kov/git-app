import axios from 'axios'

export const getUserData = token => {
  return axios.post('http://localhost:8080/me', { token })
}
