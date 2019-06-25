import React from 'react'
import propTypes from 'prop-types'

export default function LabeledInput({ id, title, value, handler, pass = false }) {
  const type = (pass) ? 'password' : 'text'
  return (
    <div className="labeled-input">
      {title}
      <input id={id} type={type} value={value} onChange={handler} />
    </div>
  )
}

LabeledInput.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
  pass: propTypes.bool,
}

LabeledInput.defaultProps = {
  pass: false,
}
