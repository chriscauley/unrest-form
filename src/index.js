import Form from './Form'
import Field from './Field'
import Checkbox from './widgets/Checkbox'
import Image from './widgets/Image'
import Object_ from './widgets/Object'
import Range from './widgets/Range'
import Select from './widgets/Select'
import Text from './widgets/Text'

import prepField from './lib/prepField'
import quickSchema from './lib/quickSchema'

const components = { Form, Field, Checkbox, Object: Object_, Range, Select, Text }
const prefix = 'Ur' // TODO make this configurable

const plugin = {
  install: app => {
    Object.entries(components).forEach(
      ([name, component]) => app.component(prefix + name, component)
    )
  }
}

export default {
  prepField,
  quickSchema,
  plugin,
  ...components,
  install: app => {
    console.warn("DEPRACATED: Use UrForm.plugin")
    app.use(plugin)
  },
}
