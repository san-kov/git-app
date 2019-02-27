import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Header from './components/Header'

@inject('authStore')
@observer
class App extends Component {
  componentDidMount() {
    const { pullUser, token } = this.props.authStore

    if (token) {
      pullUser()
    }
  }
  render() {
    const { token, appLoaded, authorizing } = this.props.authStore

    if (authorizing) {
      return null
    }

    if (!token) {
      return <Welcome />
    }

    if (appLoaded) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      )
    }

    return null
  }
}

export default App
