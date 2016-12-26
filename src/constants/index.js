import preventDuplicateKeysExtend from 'utils/preventDuplicateKeysExtend'

import * as actions from './actions'
import * as details from './details'

// merge all the constants into a single object,
// but check for duplicate keys first.
const constants = preventDuplicateKeysExtend({
  actions,
  details,
})

export default constants
