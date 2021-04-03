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

const toSentenceCase = s => {
  // convert camelCase and snake_case to Sentence case
  s = s
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/_/g, ' ')
  return s[0].toUpperCase() + s.slice(1)
}

export default (name, { ...field }, { ui: global_ui = {} } = {}) => {
  field.name = name
  field.id = `id__${field.name}`
  field.ui = prepUi(field, global_ui)
  if (!field.title) {
    field.title = toSentenceCase(field.name)
  }
  return field
}
