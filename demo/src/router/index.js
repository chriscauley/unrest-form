import { createRouter, createWebHashHistory } from 'vue-router'

import Basics from '@/views/Basics'
import Lazy from '@/views/Lazy'

const history = createWebHashHistory()
const routes = [
  { path: '/', component: Basics },
  { path: '/Lazy', component: Lazy },
]

export default createRouter({ history, routes })
