import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('authStore')
@observer
class Home extends Component {
  render() {
    const { user } = this.props.authStore
    return (
      <div>
        <h1>hello, {user.name}</h1>
      </div>
    )
  }
}

export default Home
