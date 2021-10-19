export default (value, field = {}) => {
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
