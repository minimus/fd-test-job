import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/home/HomeContainer'

export default class Application extends Component {
  render() {
    return (
      <article id="main">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:latitude/:longitude" component={Home} />
        </Switch>
      </article>
    )
  }
}
