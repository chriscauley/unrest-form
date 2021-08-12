const assignDefaults = (state, schema) => {
  if (schema.type === 'object') {
    state = state || {}
    Object.entries(schema.properties).forEach(([key, property]) => {
      state[key] = assignDefaults(state[key], property)
    })
    return state
  }
  const value = state || schema.default
  if (['integer', 'number'].includes(schema.type)) {
    return isNaN(Number(value)) ? value : Number(value)
  }
  return value
}

export default assignDefaults
