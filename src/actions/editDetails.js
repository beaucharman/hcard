import {
  SET_AVATAR_PREVIEW,
  UPDATE_DETAILS,
} from 'constants/actions'

export const setAvatarPreview = (avatar) => ({
  type: SET_AVATAR_PREVIEW,
  payload: { avatar },
})

export const updateDetails = (identifier, value) => ({
  type: UPDATE_DETAILS,
  payload: { identifier, value },
})
