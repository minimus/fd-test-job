import React, { Component } from 'react'
import propTypes from 'prop-types'
import LabeledInput from './LabeledInput'

export default class HomeRecovery extends Component {
  render() {
    const {
      strings: { recovery: strings }, username, trackName, passwordRecoverySent,
    } = this.props
    return (
      <div id="home-component-recovery">
        <h1>{strings.header}</h1>
        <LabeledInput handler={trackName} id="username" title={strings.email} value={username} />
        <p>{strings.help}</p>
        <div className="login-buttons">
          <input
            id="send-request"
            className="sign-in-button"
            type="button"
            value={strings.sendRequest}
            onClick={passwordRecoverySent}
          />
        </div>
      </div>
    )
  }
}

HomeRecovery.propTypes = {
  username: propTypes.string.isRequired,
  strings: propTypes.objectOf.isRequired,
  trackName: propTypes.func.isRequired,
  passwordRecoverySent: propTypes.func.isRequired,
}
