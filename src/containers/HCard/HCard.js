import React, { PropTypes } from 'react'
import styles from './HCard.styl'
import { connect } from 'react-redux'
import EditDetails from 'components/EditDetails'
import Preview from 'components/Preview'
import { setAvatarPreview, updateDetails } from 'actions/editDetails'

const HCard = ({ avatar, details, dispatch }) => {
  const handleFileUpload = (file) => {
    dispatch(setAvatarPreview(file))
  }

  const handleInputChange = (identifier, value) => {
    dispatch(updateDetails(identifier, value))
  }

  const handleSubmitClick = () => {
    console.log('Form Submitted!')
  }

  return (
    <div className={styles.base}>
      <EditDetails
        details={details}
        handleFileUpload={handleFileUpload}
        handleInputChange={handleInputChange}
        handleSubmitClick={handleSubmitClick}
      />
      <Preview
        avatarPreviewSrc={avatar}
        details={details}
      />
    </div>
  )
}

HCard.propTypes = {
  avatar: PropTypes.string,
  displatch: PropTypes.func,
  data: PropTypes.object,
}

const mapStateToProps = ({ editDetails }) => ({
  avatar: editDetails.avatar,
  details: editDetails.details,
})

export default connect(mapStateToProps)(HCard)
