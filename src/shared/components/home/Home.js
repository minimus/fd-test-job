import React, { Component } from 'react'
import propTypes from 'prop-types'
import Login from './HomeLogin'
import Recovery from './HomeRecovery'

export default class Home extends Component {
  dialogContent = () => {
    const { recovery } = this.props
    if (recovery) return <Recovery {...this.props} />
    return <Login {...this.props} />
  }

  render() {
    return (
      <section id="home-component">
        {this.dialogContent()}
      </section>
    )
  }
}

Home.propTypes = {
  recovery: propTypes.bool.isRequired,
}
