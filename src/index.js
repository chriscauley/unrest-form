import Form from './Form.vue'
import Field from './Field.vue'
import Checkbox from './widgets/Checkbox.vue'
import Image from './widgets/Image.vue'
import Object_ from './widgets/Object.vue'
import Password from './widgets/Password.vue'
import Range from './widgets/Range.vue'
import Select from './widgets/Select.vue'
import Text from './widgets/Text.vue'

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
