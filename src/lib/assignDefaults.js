const assignDefaults = (value, schema) => {
  if (schema.type === 'object') {
    const state = value || {}
    Object.entries(schema.properties).forEach(([key, property]) => {
      state[key] = assignDefaults(schema.default?.[key] || state[key], property)
    })
    return state
  }
  value = value || schema.default
  if (['integer', 'number'].includes(schema.type)) {
    return isNaN(Number(value)) ? value : Number(value)
  }
  return value
}

export default assignDefaults
