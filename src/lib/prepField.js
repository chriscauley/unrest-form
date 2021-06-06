import Str from './Str'
import parseLazySchema from './parseLazySchema'

const getDefaultTagName = field => {
  if (field.type === 'object') {
    return 'ur-object'
  } else if (field.enum) {
    return 'ur-select'
  } else if (field.type === 'boolean') {
    return 'ur-checkbox'
  } else if (field.type === 'image') {
    return 'ur-image'
  } else if (field.format === 'color') {
    return 'ur-color'
  }
  return 'ur-text'
}

const prepUi = (field, global_ui) => {
  const default_ui = { type: 'text', tagName: getDefaultTagName(field) }
  if (field.type === 'number') {
    default_ui.type = 'number'
  }
  if (field.name.includes('password')) {
    default_ui.type = 'password'
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
  if (!field.title) {
    field.title = Str.toSentenceCase(field.name)
  }
  field.__path = path.slice()
  if (name !== '__root') {
    field.__path.push(field.name)
  }
  return field
}
