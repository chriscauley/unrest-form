import { createApp } from 'vue'
import App from './App.vue'
import UrForm from '@unrest/form'

import './styles/base.scss'

const app = createApp(App)
app.use(UrForm)
app.mount('#app')
