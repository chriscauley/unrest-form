import UrForm from './Form'
import prepFields from './prepFields'

export default {
  prepFields,
  install: app => {
    app.component('ur-form', UrForm)
  },
}
