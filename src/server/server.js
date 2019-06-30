import path from 'path'
import express from 'express'

import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { LocalizeProvider, localizeReducer } from 'react-localize-redux'
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

  const localesInit = {
    languages: [
      { name: 'English', code: 'en' },
      { name: 'German', code: 'de' },
      { name: 'Russian', code: 'ru' },
    ],
    translation: {
      maps: {
        markerPosition: ['You are here.', 'Du bist hier.', 'Вы здесь.'],
        markerNearPosition: [
          'You are here... Maybe...',
          'Du bist hier... Vielleicht...',
          'Вы здесь... Возможно...',
        ],
      },
      login: {
        header: ['Please, log in', 'Anmeldung', 'Авторизация'],
        email: ['E-mail', 'E-mail', 'E-mail'],
        password: ['Password', 'Passwort', 'Пароль'],
        rememberMe: ['Remember Me', 'Erinnere dich an mich', 'Запомнить меня'],
        signIn: ['Sign In', 'Einloggen', 'Вход'],
        signOut: ['Sign Out', 'Ausloggen', 'Выйти'],
        forgotPass: ['Forgot Password?', 'Passwort vergessen?', 'Забыли пароль?'],
      },
      recovery: {
        header: ['Password Recovery', 'Passwort-Wiederherstellung', 'Восстановление пароля'],
        sendRequest: ['Send Request', 'Anfrage senden', 'Отправить запрос'],
        help: [
          'Enter your email and click "Send Request" button. You will be sent a letter with detailed instructions.',
          'Geben Sie Ihre E-Mail-Adresse ein und klicken Sie auf "Anfrage senden". Sie erhalten einen Brief mit detaillierten Anweisungen.',
          'Введите адрес электронной почты и нажмите кнопку «Отправить запрос». Вам будет отправлено письмо с подробными инструкциями.',
        ],
      },
    },
    options: {
      defaultLanguage: locale,
      renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup,
    },
  }

  const store = createStore(reducer)
  const context = {}

  // Render the component to a string
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <LocalizeProvider initialize={localesInit} store={store}>
        <StaticRouter location={req.url} context={context}>
          <Application />
        </StaticRouter>
      </LocalizeProvider>
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
