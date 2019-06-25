import path from 'path'
import express from 'express'

import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Application from '../shared/Application'
import { reducer } from '../shared/redux/index'
import { getUserLocale, getDefaultPosition, getDefaultStrings } from '../shared/redux/modules/helpers'

const app = express()

app.use(helmet())

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(compression())

// Serve static files
app.use(express.static(path.join('./'/* __dirname */, 'public')))

function renderFullPage(html, preloadedState) {
  const { home: { locale } } = preloadedState
  return `
    <!doctype html>
    <html lang="${locale}">
      <head>
        <title>TheBoats.com test job</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&subset=cyrillic" rel="stylesheet">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css">
        <link href="/css/style.css" rel="stylesheet">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
        </script>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
    `
}

process.env.BROWSER = false

function handleRender(req, res) {
  // Preferred language
  const acceptedLanguages = req.get('Accept-Language')
  const locale = (acceptedLanguages) ? getUserLocale(acceptedLanguages.split(',')[0]) : 'en'
  const position = getDefaultPosition(locale)
  const strings = getDefaultStrings(locale)

  const { latitude, longitude } = req.params
  const storedPosition = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    stored: (!!latitude && !!longitude),
  }

  const { cookies } = req
  const { username = '' } = cookies
  const rememberMe = (!!username)

  const store = createStore(reducer)
  const context = {}

  // Render the component to a string
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Application />
      </StaticRouter>
    </Provider>,
  )

  // Grab the initial state from our Redux store
  const state = store.getState()
  const { home } = state
  const preloadedState = {
    ...state,
    home: {
      ...home, locale, position, storedPosition, strings, username, rememberMe,
    },
  }

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

app.use('/:latitude/:longitude', handleRender)
app.use('/', handleRender)

app.listen(port)
