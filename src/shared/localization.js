export const localesInit = {
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
  options: {},
}
