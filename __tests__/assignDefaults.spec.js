import assignDefaults from '@/assignDefaults'

test('shallow test', () => {
  const schema = {
    type: 'object',
    properties: {
      name: {
        default: 'foo',
      }
    }
  }

  const empty_state = {}
  assignDefaults(empty_state, schema)
  expect(empty_state.name).toBe('foo')

  const full_state = {name:'bar'}
  assignDefaults(full_state, schema)
  expect(full_state.name).toBe('bar')
})

test('deep test', () => {
  const schema = {
    type: 'object',
    properties: {
      address: {
        type: 'object',
        properties: {
          street: {},
          city: {
            default: 'LA',
          },
          country: {
            default: 'USA',
          },
        }
      }
    }
  }

  const empty_state = {}
  assignDefaults(empty_state, schema)
  expect(empty_state.address.street).toBe(undefined)
  expect(empty_state.address.city).toBe('LA')
  expect(empty_state.address.country).toBe('USA')

  const full_state = {address: {city: 'London', country: 'UK', street: '123 Baker Street'}}
  assignDefaults(full_state, schema)
  expect(full_state.address.street).toBe('123 Baker Street')
  expect(full_state.address.city).toBe('London')
  expect(full_state.address.country).toBe('UK')

  const partial_state = {address: {street: '123 Baker Street'}}
  assignDefaults(partial_state, schema)
  expect(partial_state.address.street).toBe('123 Baker Street')
  expect(partial_state.address.city).toBe('LA')
  expect(partial_state.address.country).toBe('USA')
})