import React, { PropTypes } from 'react'
import styles from './EditDetails.styl'
import classnames from 'classnames'
import constants from 'constants'
import InputList from 'components/InputList'

const EditDetails = (props) => {
  let fileInput = null

  const fileUploadToAvatar = () => {
    // capture the result of the file upload and send the
    // file data to state to be used as a preview image
    const reader = new FileReader()
    reader.onload = ((event) => {
      props.handleFileUpload(event.target.result)
    })
    reader.readAsDataURL(fileInput.files[0])
  }

  const triggerFileUpload = () => {
    fileInput.click()
  }

  const handleInputChange = (identifier, event) => {
    props.handleInputChange(identifier, event.target.value)
  }

  const handleSubmitClick = () => {
    props.handleSubmitClick()
  }

  const personalDetailsItems = Object.keys(constants.PERSONAL).map((key) => ({
    hangleOnChange: handleInputChange.bind(this, key),
    identifier: key,
    label: constants.PERSONAL[key],
  }))

  const addressDetailsItems = Object.keys(constants.ADDRESS).map((key) => ({
    hangleOnChange: handleInputChange.bind(this, key),
    identifier: key,
    label: constants.ADDRESS[key],
  }))

  return (
    <div className={styles.base}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>hCard Builder</h1>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Personal Details</legend>
          <InputList items={personalDetailsItems} />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Address</legend>
          <InputList items={addressDetailsItems} />
        </fieldset>
        <div className={styles.action}>
          <button className={styles.button} onClick={triggerFileUpload}>Upload Avatar</button>
          <input
            className={styles.file}
            onChange={fileUploadToAvatar}
            ref={(input) => { fileInput = input }}
            type="file"
          />
          <button
            onClick={handleSubmitClick}
            className={classnames(styles.button, styles.buttonSubmit)
          }>
            Create hCard
          </button>
        </div>
      </div>
    </div>
  )
}

EditDetails.propTypes = {
  handleFileUpload: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleSubmitClick: PropTypes.func,
}

export default EditDetails
