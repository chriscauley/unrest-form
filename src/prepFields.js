const getDefaultTagName = field => {
  if (field.enum) {
    return 'ur-select'
  } else if (field.type === 'boolean') {
    return 'ur-checkbox'
  } else if (field.format === 'color') {
    return 'ur-color'
  }
  return 'ur-text'
}

export default (schema, ui = {}) => {
  return Object.entries(schema.properties).map(([name, { ...field }]) => {
    field.name = name
    field.id = `id__${field.name}`
    const uiDefaults = { type: 'text', tagName: getDefaultTagName(field) }
    field.ui = Object.assign(uiDefaults, ui[name], field.ui)
    if (field.type === 'number') {
      field.ui.type = 'number'
    }
    if (!field.title) {
      field.title = field.name[0].toUpperCase() + field.name.slice(1)
    }
    return field
  })
}
