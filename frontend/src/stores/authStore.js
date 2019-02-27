import { observer, action } from 'mobx'

import * as authServices from '../services/authServices'

class authStore {
  @observer user = null
  @observer token = localStorage.getItem('token')
  @action pullUser = () => {
    
  }
}
