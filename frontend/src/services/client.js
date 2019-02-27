import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000/api/'
})

if (localStorage.token) {
  client.defaults.headers['Authorization'] = `Bearer ${localStorage.token}`
}

export default client
