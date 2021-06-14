import { createRouter, createWebHashHistory } from 'vue-router'

import Basics from '@/views/Basics'
import Lazy from '@/views/Lazy'
import Misc from '@/views/Misc'

const history = createWebHashHistory()
const routes = [
  { path: '/', component: Basics },
  { path: '/lazy', component: Lazy },
  { path: '/misc', component: Misc },
]

export default createRouter({ history, routes })
