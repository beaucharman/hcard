import React, { PropTypes } from 'react'
import Input from 'components/Input'
import styles from './InputList.styl'

const InputList = ({ items }) => {
  const inputItems = items.map((item, key) => (
    <Input
      key={key}
      {...item}
    />
  ))

  return (
    <ul className={styles.base}>{inputItems}</ul>
  )
}

InputList.propTypes = {
  items: PropTypes.array,
}

export default InputList
