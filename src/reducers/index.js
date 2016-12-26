import { combineReducers } from 'redux'

// Reducers
import editDetails from './editDetails'

// Pull all the reducers together, ready for a single store
export default combineReducers({
  editDetails,
})
