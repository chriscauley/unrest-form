const assignDefaults = (state, schema) => {
  if (schema.type === 'object') {
    state = state || {}
    Object.entries(schema.properties).forEach(([key, property]) => {
      state[key] = assignDefaults(state[key], property)
    })
    return state
  }
  return state || schema.default
}

export default assignDefaults
