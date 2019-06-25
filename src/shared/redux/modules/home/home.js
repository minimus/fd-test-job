import {
  getDefaultPosition, setCookie, getUserPosition, getDefaultStrings,
} from '../helpers'

const HOME_USERNAME_CHANGED = 'HOME_USERNAME_CHANGED'
const HOME_PASSWORD_CHANGED = 'HOME_PASSWORD_CHANGED'
const HOME_SIGN_IN = 'HOME_SIGN_IN'
const HOME_SIGN_OUT = 'HOME_SIGN_OUT'
const HOME_REMEMBER_ME_CHANGED = 'HOME_REMEMBER_ME_CHANGED'
const HOME_PASSWORD_RECOVERY_NEEDED = 'HOME_PASSWORD_RECOVERY_NEEDED'
const HOME_PASSWORD_RECOVERY_SENT = 'HOME_PASSWORD_RECOVERY_SENT'

const APPLICATION_GET_USER_PROPERTIES = 'APPLICATION_GET_USER_PROPERTIES'

const MAP_USER_POSITION_CHANGE_STARTED = 'MAP_USER_POSITION_CHANGE_STARTED'
const MAP_USER_POSITION_CHANGE_FINISHED = 'MAP_USER_POSITION_CHANGE_FINISHED'
const MAP_USER_POSITION_CHANGE_ERROR = 'MAP_USER_POSITION_CHANGE_ERROR'

const MAP_VIEWPORT_CHANGED = 'MAP_VIEWPORT_CHANGED'

export function trackName(event) {
  return (dispatch) => {
    const username = event.target.value
    dispatch({ type: HOME_USERNAME_CHANGED, payload: username })
  }
}

export function trackPass(event) {
  return (dispatch) => {
    const password = event.target.value
    dispatch({ type: HOME_PASSWORD_CHANGED, payload: password })
  }
}

export function changeRememberMe(event) {
  return (dispatch) => {
    dispatch({ type: HOME_REMEMBER_ME_CHANGED, payload: event.target.checked })
  }
}

export function signIn() {
  return (dispatch) => {
    dispatch({ type: HOME_SIGN_IN, payload: true })
  }
}

export function signOut() {
  return (dispatch) => {
    dispatch({ type: HOME_SIGN_OUT, payload: false })
  }
}

export function passwordRecoveryNeeded() {
  return (dispatch) => {
    dispatch({ type: HOME_PASSWORD_RECOVERY_NEEDED, payload: true })
  }
}

export function passwordRecoverySent() {
  return (dispatch) => {
    dispatch({ type: HOME_PASSWORD_RECOVERY_SENT, payload: false })
  }
}

export function changeUserPosition() {
  return (dispatch) => {
    dispatch({ type: MAP_USER_POSITION_CHANGE_STARTED, payload: true })

    setTimeout(() => {
      getUserPosition({
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      })
        .then((data) => {
          const { latitude, longitude } = data.coords
          dispatch({
            type: MAP_USER_POSITION_CHANGE_FINISHED,
            payload: {
              latitude,
              longitude,
            },
          })
        })
        .catch((err) => {
          dispatch({
            type: MAP_USER_POSITION_CHANGE_ERROR,
            payload: err,
          })
        })
    }, 1500)
  }
}

export function viewportChanged(viewport) {
  return (dispatch) => {
    const { center: [latitude, longitude], zoom } = viewport
    dispatch({ type: MAP_VIEWPORT_CHANGED, payload: { position: { latitude, longitude }, zoom } })
  }
}

export function getUserProperties() {
  return (dispatch) => {
    dispatch({ type: APPLICATION_GET_USER_PROPERTIES, payload: {} })
  }
}

const initialState = {
  username: '',
  password: '',
  rememberMe: false,
  recovery: false,
  locale: 'en',
  position: getDefaultPosition('en'),
  currentPosition: getDefaultPosition('en'),
  storedPosition: {
    stored: false,
    latitude: null,
    longitude: null,
  },
  zoom: 9,
  strings: getDefaultStrings('en'),
  loggedIn: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MAP_USER_POSITION_CHANGE_STARTED:
      return state

    case MAP_USER_POSITION_CHANGE_FINISHED: {
      const { storedPosition } = state
      return {
        ...state,
        position: (storedPosition.stored) ? {
          latitude: storedPosition.latitude,
          longitude: storedPosition.longitude,
        } : action.payload,
        currentPosition: { ...action.payload },
        zoom: 10,
      }
    }

    case MAP_USER_POSITION_CHANGE_ERROR: {
      const { storedPosition } = state
      const { locale } = state
      const position = getDefaultPosition(locale)
      return {
        ...state,
        position: (storedPosition.stored) ? {
          latitude: storedPosition.latitude,
          longitude: storedPosition.longitude,
        } : position,
        currentPosition: { ...position },
        zoom: 10,
      }
    }

    case MAP_VIEWPORT_CHANGED:
      return { ...state, ...action.payload }

    case HOME_USERNAME_CHANGED: {
      const username = action.payload
      return { ...state, username }
    }

    case HOME_PASSWORD_CHANGED:
      return { ...state, password: action.payload }

    case HOME_SIGN_IN: {
      const { username, rememberMe } = state
      setCookie(username, rememberMe)
      return { ...state, loggedIn: action.payload }
    }

    case HOME_SIGN_OUT: {
      const { username } = state
      setCookie(username, false)
      return { ...state, loggedIn: action.payload }
    }

    case HOME_REMEMBER_ME_CHANGED: {
      const rememberMe = action.payload
      // const { username } = state
      // setCookie(username, rememberMe)
      return { ...state, rememberMe }
    }

    case HOME_PASSWORD_RECOVERY_NEEDED:
      return { ...state, recovery: action.payload }

    case HOME_PASSWORD_RECOVERY_SENT:
      return { ...state, recovery: action.payload }

    default:
      return state
  }
}
