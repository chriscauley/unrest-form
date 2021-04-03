import UrForm from './Form'
import UrField from './Field'
import UrCheckbox from './widgets/Checkbox'
import UrImage from './widgets/Image'
import UrObject from './widgets/Object'
import UrRange from './widgets/Range'
import UrSelect from './widgets/Select'
import UrText from './widgets/Text'

import prepField from './prepField'

export default {
  prepField,
  install: app => {
    app.component('ur-form', UrForm)
    app.component('ur-field', UrField)
    app.component('ur-checkbox', UrCheckbox)
    app.component('ur-image', UrImage)
    app.component('ur-object', UrObject)
    app.component('ur-range', UrRange)
    app.component('ur-select', UrSelect)
    app.component('ur-text', UrText)
  },
}
