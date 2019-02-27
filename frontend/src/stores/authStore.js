import { observable } from 'mobx'
import client from '../services/client'

import * as authServices from '../services/authServices'

class AuthStore {
  @observable user = null
  @observable token = localStorage.getItem('token')
  @observable appLoaded = false
  @observable authorizing = false

  pullUser = async () => {
    const { data } = await authServices.getUserData()

    this.user = data
    this.appLoaded = true
  }

  login = async code => {
    this.authorizing = true

    const res = await authServices.login(code)

    const { token } = res.data
    console.log(res)
    console.log(token)
    this.token = token
    localStorage.setItem('token', token)
    client.defaults.headers['Authorization'] = `Bearer ${token}`
    this.pullUser()

    this.authorizing = false
  }
}

export default new AuthStore()
