import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { observable } from 'mobx'

import Welcome from './pages/Welcome'

@observable
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Welcome} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
