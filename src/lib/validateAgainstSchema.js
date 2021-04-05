import { Validator } from 'jsonschema'

export const deepRemoveEmpty = obj => {
  // copied fromhttps://www.javaer101.com/en/article/57550001.html
  const new_object = {}

  Object.entries(obj).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      return
    }
    if (value.constructor !== Object) {
      new_object[key] = value
      return
    }

    // call twice in case the result returned is iteslf an empty object,
    const result = deepRemoveEmpty(value)
    if (Object.keys(result).length > 0) {
      new_object[key] = result
    }
  })

  return new_object
}

export default (instance, schema) => {
  const v = new Validator()
  const result = v.validate(deepRemoveEmpty(instance), schema)
  if (!result.errors.length) {
    return null
  }
  const errors = {}
  result.errors.forEach(({ path, argument, message, name }) => {
    path = [...path, argument]
    if (name === 'required') {
      errors[path.join('.')] = 'This field is required.'
    } else {
      errors[path.join('.')] = message
    }
  })
  return errors
}
