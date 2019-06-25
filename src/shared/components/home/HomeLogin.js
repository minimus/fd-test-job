import React, { Component } from 'react'
import propTypes from 'prop-types'
import LabeledInput from './LabeledInput'

export default class HomeLogin extends Component {
  render() {
    const {
      strings: { login: strings },
      username, password, loggedIn, rememberMe,
      trackName, trackPass, changeRememberMe, passwordRecoveryNeeded, signIn, signOut,
    } = this.props
    return (
      <div id="home-component-login">
        <h1>{strings.header}</h1>
        <LabeledInput handler={trackName} id="username" title={strings.email} value={username} />
        <LabeledInput handler={trackPass} id="password" title={strings.password} value={password} pass />
        <div>
          <label id="remember-me-label" htmlFor="remember-me">
            <input id="remember-me" type="checkbox" checked={rememberMe} onClick={changeRememberMe} />
            {strings.rememberMe}
          </label>
        </div>
        <div className="login-buttons">
          <input
            id="sign-in"
            className="sign-in-button"
            type="button"
            value={(loggedIn) ? strings.signOut : strings.signIn}
            onClick={(loggedIn) ? signOut : signIn}
          />
          <input
            id="recovery"
            className="link-button"
            type="button"
            value={strings.forgotPass}
            onClick={passwordRecoveryNeeded}
          />
        </div>
      </div>
    )
  }
}

HomeLogin.propTypes = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  rememberMe: propTypes.bool.isRequired,
  recovery: propTypes.bool.isRequired,
  loggedIn: propTypes.bool.isRequired,
  strings: propTypes.objectOf.isRequired,
  trackName: propTypes.func.isRequired,
  trackPass: propTypes.func.isRequired,
  changeRememberMe: propTypes.func.isRequired,
  passwordRecoveryNeeded: propTypes.func.isRequired,
  signIn: propTypes.func.isRequired,
  signOut: propTypes.func.isRequired,
}
