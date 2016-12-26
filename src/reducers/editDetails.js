import merge from 'lodash/merge'

import {
  SET_AVATAR_PREVIEW,
  UPDATE_DETAILS,
} from 'constants/actions'

const initialState = {
  avatar: null,
  details: {},
}

export default function editDetails(state = initialState, action) {
  switch (action.type) {
    case SET_AVATAR_PREVIEW:
      return Object.assign({}, state, {
        avatar: action.payload.avatar,
      })
    case UPDATE_DETAILS:
      return merge({}, state, {
        details: {
          [action.payload.identifier]: action.payload.value,
        },
      })
    default:
      return state
  }
}
