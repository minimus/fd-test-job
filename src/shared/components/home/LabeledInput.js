import React from 'react'
import propTypes from 'prop-types'
import { Translate, withLocalize } from 'react-localize-redux'

function LabeledInput({
  id, value, handler, pass = false,
}) {
  const type = (pass) ? 'password' : 'text'
  return (
    <div className="labeled-input">
      {(type === 'password') ? <Translate id="login.password" /> : <Translate id="login.email" />}
      <input id={id} type={type} value={value} onChange={handler} />
    </div>
  )
}

LabeledInput.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
  pass: propTypes.bool,
}

LabeledInput.defaultProps = {
  pass: false,
}

export default withLocalize(LabeledInput)
