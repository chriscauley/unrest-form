import Str from './Str'
import parseLazySchema from './parseLazySchema'

const getDefaultTagName = (field) => {
  if (field.type === 'object') {
    return 'unrest-object'
  } else if (field.enum) {
    return 'unrest-select'
  } else if (field.type === 'boolean') {
    return 'unrest-checkbox'
  } else if (field.type === 'image') {
    return 'unrest-image'
  } else if (field.format === 'color') {
    return 'unrest-color'
  } else if (field.format === 'password') {
    return 'unrest-password'
  } else if (field.__widget === 'HiddenInput') {
    return 'unrest-hidden'
  }
  return 'unrest-text'
}

const prepUi = (field, global_ui) => {
  const default_ui = { type: 'text', tagName: getDefaultTagName(field) }
  if (field.type === 'number') {
    default_ui.type = 'number'
  }
  if (field.format === 'password') {
    default_ui.type = 'password'
  }
  if (field.format === 'email') {
    default_ui.type = 'email'
  }
  return Object.assign(default_ui, global_ui[field.name], field.ui)
}

export default (name, { ...field }, { ui: global_ui = {} } = {}, path = []) => {
  if (field.type === 'lazy') {
    field = parseLazySchema(field)
  }
  field.name = name
  field.id = `id__${field.name}`
  field.ui = prepUi(field, global_ui)
  if (field.title === undefined) {
    field.title = Str.toSentenceCase(field.name)
  }
  field.__path = path.slice()
  if (name !== '__root') {
    field.__path.push(field.name)
  }
  return field
}
