import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Translate, withLocalize } from 'react-localize-redux'
import LabeledInput from './LabeledInput'

// eslint-disable-next-line react/prefer-stateless-function
class HomeRecovery extends Component {
  render() {
    const { username, trackName, passwordRecoverySent } = this.props
    return (
      <div id="home-component-recovery">
        <h1><Translate id="recovery.header" /></h1>
        <LabeledInput handler={trackName} id="username" value={username} />
        <p><Translate id="recovery.help" /></p>
        <div className="login-buttons">
          <button
            id="send-request"
            className="sign-in-button"
            type="button"
            onClick={passwordRecoverySent}
          >
            <Translate id="recovery.sendRequest" />
          </button>
        </div>
      </div>
    )
  }
}

HomeRecovery.propTypes = {
  username: propTypes.string.isRequired,
  trackName: propTypes.func.isRequired,
  passwordRecoverySent: propTypes.func.isRequired,
}

export default withLocalize(HomeRecovery)
