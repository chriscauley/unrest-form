import { createApp } from 'vue'
import App from './App.vue'
import vjsf from '@unrest/vjsf'

const app = createApp(App)
app.use(vjsf)
app.mount('#app')
