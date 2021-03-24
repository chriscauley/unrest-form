const getDefaultTagName = field => {
  if (field.enum) {
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

export default (schema, global_ui = {}) => {
  return Object.entries(schema.properties).map(([name, { ...field }]) => {
    field.name = name
    field.id = `id__${field.name}`
    field.ui = prepUi(field, global_ui)
    if (!field.title) {
      field.title = field.name[0].toUpperCase() + field.name.slice(1)
    }
    return field
  })
}
