const assignDefaults = (value, schema) => {
  if (schema.type === 'object') {
    const state = value || {}
    Object.entries(schema.properties).forEach(([key, property]) => {
      const new_value = assignDefaults(schema.default?.[key] || state[key], property)
      if (new_value !== undefined) {
        state[key] = new_value
      }
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
