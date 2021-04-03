import prepField from '@/prepField'
import schema from '@demo/schema'

test('prepField', () => {
  Object.entries(schema.properties).forEach(([name, property]) => {
    expect(prepField(name, property)).toMatchSnapshot()
  })
})
