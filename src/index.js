import Form from './Form.vue'
import Field from './Field.vue'
import Checkbox from './widgets/Checkbox.vue'
import Checkboxes from './widgets/Checkboxes.vue'
import DateTime from './widgets/DateTime.vue'
import Image from './widgets/Image.vue'
import Object_ from './widgets/Object.vue'
import Password from './widgets/Password.vue'
import RadioButtons from './widgets/RadioButtons.vue'
import Range from './widgets/Range.vue'
import Select from './widgets/Select.vue'
import Text from './widgets/Text.vue'

import coerce from './lib/coerce'
import getChoices from './lib/getChoices'
import prepField from './lib/prepField'
import parseLazySchema from './lib/parseLazySchema'

const components = {
  Form,
  Field,
  Checkbox,
  Checkboxes,
  DateTime,
  Image,
  Object: Object_,
  RadioButtons,
  Range,
  Select,
  Text,
  Password,
}
const prefix = 'Unrest'

const plugin = {
  install: (app) => {
    console.warn('DEPRACATED: app.use(UrForm) is now preferred')
    app.use(_default)
  },
}

const _default = {
  coerce,
  getChoices,
  prepField,
  parseLazySchema,
  plugin,
  ...components,
  install: (app) => {
    Object.entries(components).forEach(([name, component]) =>
      app.component(prefix + name, component),
    )
  },
}

export default _default
