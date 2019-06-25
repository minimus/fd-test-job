import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configStore from './configStore'
import Application from '../shared/Application'

process.env.BROWSER = true

const state = window.__PRELOADED_STATE__

const store = configStore(state)

hydrate(
  <Provider store={store}>
    <Router>
      <Application />
    </Router>
  </Provider>,
  document.querySelector('#app'),
)
