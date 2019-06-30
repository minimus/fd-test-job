export function getUserPosition(options) {
  if (window) {
    return new Promise((resolve, reject) => (
      window.navigator.geolocation.getCurrentPosition(resolve, reject, options)
    ))
  }
  return undefined
}

export function setCookie(username, remember = true) {
  const days = (!!username && remember) ? 7 : -1
  const date = new Date()
  date.setDate(date.getDate() + days)
  document.cookie = `username=${username}; expires=${date.toUTCString()}`
}

export function getCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*=\s*([^;]*).*$)|^.*$/, '$1')
}

export function getUserLocale(preferredLanguage) {
  if (preferredLanguage) {
    const pl = preferredLanguage.split(',')[0]
    if (/^(ru|en|de)/gi.test(pl)) {
      return pl.split('-')[0].toLowerCase()
    }
  } else if (!!window) {
    if (/^(ru|de|en)/gi.test(window.navigator.language)) {
      return window.navigator.language.split('-')[0].toLowerCase()
    }
    return 'en'
  }
  return 'en'
}

export function getDefaultPosition(locale = 'en') {
  const defaultPositions = {
    en: {
      latitude: 40.730610,
      longitude: -73.935242,
    },
    de: {
      latitude: 52.520008,
      longitude: 13.404954,
    },
    ru: {
      latitude: 55.751244,
      longitude: 37.618423,
    },
  }
  return defaultPositions[locale]
}

export function getDefaultStrings(locale) {
  const defaultStrings = {
    en: {
      maps: {
        markerPosition: 'You are here.',
        markerNearPosition: 'You are here... Maybe...',
      },
      login: {
        header: 'Please, log in',
        email: 'E-mail',
        password: 'Password',
        rememberMe: 'Remember Me',
        signIn: 'Sign In',
        signOut: 'Sign Out',
        forgotPass: 'Forgot Password?',
      },
      recovery: {
        header: 'Password Recovery',
        sendRequest: 'Send Request',
        help: 'Enter your email and click "Send Request" button. You will be sent a letter with detailed instructions.',
      },
    },
    de: {
      maps: {
        markerPosition: 'Du bist hier.',
        markerNearPosition: 'Du bist hier... Vielleicht...',
      },
      login: {
        header: 'Anmeldung',
        email: 'E-mail',
        password: 'Passwort',
        rememberMe: 'Erinnere dich an mich',
        signIn: 'Einloggen',
        signOut: 'Ausloggen',
        forgotPass: 'Passwort vergessen?',
      },
      recovery: {
        header: 'Passwort-Wiederherstellung',
        sendRequest: 'Anfrage senden',
        help: 'Geben Sie Ihre E-Mail-Adresse ein und klicken Sie auf "Anfrage senden". Sie erhalten einen Brief mit detaillierten Anweisungen.',
      },
    },
    ru: {
      maps: {
        markerPosition: 'Вы здесь.',
        markerNearPosition: 'Вы здесь... Возможно...',
      },
      login: {
        header: 'Авторизация',
        email: 'E-mail',
        password: 'Пароль',
        rememberMe: 'Запомнить меня',
        signIn: 'Вход',
        signOut: 'Выйти',
        forgotPass: 'Забыли пароль?',
      },
      recovery: {
        header: 'Восстановление пароля',
        sendRequest: 'Отправить запрос',
        help: 'Введите адрес электронной почты и нажмите кнопку «Отправить запрос». Вам будет отправлено письмо с подробными инструкциями.',
      },
    },
  }

  if (/^(en|de|ru)$/.test(locale)) return defaultStrings[locale]
  return defaultStrings.en
}
