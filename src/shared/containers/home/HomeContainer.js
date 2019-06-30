import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Home from '../../components/home/Home'
import Map from '../../components/map/BackgroundMap'
import {
  trackName, trackPass, getUserProperties, changeUserPosition, viewportChanged,
  changeRememberMe, passwordRecoveryNeeded, passwordRecoverySent, signIn, signOut,
} from '../../redux/modules/home'

class HomeContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.changeUserPosition()
  }

  render() {
    return (
      <div id="home-container">
        <Map {...this.props} />
        <Home {...this.props} />
      </div>
    )
  }
}

HomeContainer.propTypes = {
  changeUserPosition: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
  locale: state.home.locale,
  position: state.home.position,
  currentPosition: state.home.currentPosition,
  zoom: state.home.zoom,
  username: state.home.username,
  password: state.home.password,
  rememberMe: state.home.rememberMe,
  recovery: state.home.recovery,
  loggedIn: state.home.loggedIn,
})

const mapDispatchToProps = {
  trackName,
  trackPass,
  getUserProperties,
  changeUserPosition,
  viewportChanged,
  changeRememberMe,
  passwordRecoveryNeeded,
  passwordRecoverySent,
  signIn,
  signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeContainer))
