const TYPES = ['number', 'string', 'boolean']

const parseLazySchema = (schema) => {
  if (schema === null || schema === undefined) {
    return {} // jsonschema's "any" type
  }
  for (let i = 0; i < TYPES.length; i++) {
    if (typeof schema === TYPES[i]) {
      return { default: schema, type: TYPES[i] }
    }
  }
  if (Array.isArray(schema)) {
    return {
      type: 'array',
      default: schema,
      items: parseLazySchema(schema[0]),
    }
  }

  if (schema.type === 'lazy') {
    const properties = {}
    Object.entries(schema).forEach(([key, value]) => (properties[key] = parseLazySchema(value)))
    delete properties.type
    return { type: 'object', properties }
  }

  // anything with type already specified is considered valid schema
  // TODO is there a safe way to recurse down this structure?
  if (schema.type) {
    return schema
  }

  throw 'Unrecognized schema object for parseLazySchema'
}

export default parseLazySchema
