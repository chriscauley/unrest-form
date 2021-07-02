import Form from './Form'
import Field from './Field'
import Checkbox from './widgets/Checkbox'
import Image from './widgets/Image'
import Object_ from './widgets/Object'
import Password from './widgets/Password'
import Range from './widgets/Range'
import Select from './widgets/Select'
import Text from './widgets/Text'

import prepField from './lib/prepField'
import parseLazySchema from './lib/parseLazySchema'

const components = { Form, Field, Checkbox, Image, Object: Object_, Range, Select, Text, Password }
const prefix = 'Unrest'

const plugin = {
  install: (app) => {
    Object.entries(components).forEach(([name, component]) =>
      app.component(prefix + name, component),
    )
  },
}

export default {
  prepField,
  parseLazySchema,
  plugin,
  ...components,
  install: (app) => {
    console.warn('DEPRACATED: Use UrForm.plugin')
    app.use(plugin)
  },
}
