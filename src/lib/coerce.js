const coerceArray = (value, field = {}) => {
  if (!field.type || field.type === 'array') {
    return value
  } else if (field.type === 'string') {
    return value.join(',')
  } else if (field.type === 'object') {
    return Object.fromEntries(value.map((v) => [v, true]))
  }
  throw `Unknow value "${value}" for field type "${field.type}"`
}

export default (value, field = {}) => {
  if (Array.isArray(value)) {
    return coerceArray(value, field)
  }
  if (field.type === 'number' || field.type === 'integer') {
    // Number('') coerces to 0
    return value === '' ? NaN : Number(value)
  } else if (field.type === 'array' && typeof value === 'string') {
    return value
      .split(field.delimiter || ',')
      .map((s) => s.trim())
      .filter(Boolean)
  }
  return value
}
