import React, { PropTypes } from 'react'
import styles from './Input.styl'

const Input = ({ hangleOnChange, identifier, label }) => {
  return (
    <li className={styles.base}>
      <label className={styles.label} htmlFor={identifier}>{label}</label>
      <input
        className={styles.input}
        id={identifier}
        name={identifier}
        type="text"
        onChange={hangleOnChange}
      />
    </li>
  )
}

Input.propTypes = {
  hangleOnChange: PropTypes.func,
  identifier: PropTypes.string,
  label: PropTypes.string,
}

export default Input
