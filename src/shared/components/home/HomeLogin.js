import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Translate, withLocalize } from 'react-localize-redux'
import LabeledInput from './LabeledInput'

// eslint-disable-next-line react/prefer-stateless-function
class HomeLogin extends Component {
  render() {
    const {
      username, password, loggedIn, rememberMe,
      trackName, trackPass, changeRememberMe, passwordRecoveryNeeded, signIn, signOut,
    } = this.props
    return (
      <div id="home-component-login">
        <h1><Translate id="login.header" /></h1>
        <LabeledInput handler={trackName} id="username" value={username} />
        <LabeledInput handler={trackPass} id="password" value={password} pass />
        <div>
          <label id="remember-me-label" htmlFor="remember-me">
            <input id="remember-me" type="checkbox" checked={rememberMe} onClick={changeRememberMe} />
            <Translate id="login.rememberMe" />
          </label>
        </div>
        <div className="login-buttons">
          <button
            id="sign-in"
            className="sign-in-button"
            type="button"
            onClick={(loggedIn) ? signOut : signIn}
          >
            {(loggedIn) ? <Translate id="login.signOut" /> : <Translate id="login.signIn" />}
          </button>
          <button
            id="recovery"
            className="link-button"
            type="button"
            onClick={passwordRecoveryNeeded}
          >
            <Translate id="login.forgotPass" />
          </button>
        </div>
      </div>
    )
  }
}

HomeLogin.propTypes = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  rememberMe: propTypes.bool.isRequired,
  loggedIn: propTypes.bool.isRequired,
  trackName: propTypes.func.isRequired,
  trackPass: propTypes.func.isRequired,
  changeRememberMe: propTypes.func.isRequired,
  passwordRecoveryNeeded: propTypes.func.isRequired,
  signIn: propTypes.func.isRequired,
  signOut: propTypes.func.isRequired,
}

export default withLocalize(HomeLogin)
