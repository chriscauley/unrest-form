import validateAgainstSchema, { deepRemoveEmpty } from '@/lib/validateAgainstSchema'

test('deepRemoveEmpty', () => {
  const object = {
    a: {
      b: 1,
      c: {
        null: null,
        int: 0,
        str: '',
        a: 1,
        d: {},
        e: {
          f: {}
        }
      }
    },
    b: {}
  }
  expect(deepRemoveEmpty(object)).toMatchSnapshot()
})
