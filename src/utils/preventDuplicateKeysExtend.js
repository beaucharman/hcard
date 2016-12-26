import each from 'lodash/each'
import keys from 'lodash/keys'
import intersection from 'lodash/intersection'
import extend from 'lodash/extend'

// loop through a series of values (object of objects),
// report any duplicate keys and return extended result (object)
export default function preventDuplicateKeysExtend(values) {
  let result = {}
  each(keys(values), (key) => {
    const value = values[key]
    const duplicates = intersection(keys(result), keys(value))
    each(duplicates, (duplicate) => {
      console.warn('Duplicate key found.', { key, duplicate }) // eslint-disable-line no-console
    })
    result = extend(result, value)
  })
  return result
}
