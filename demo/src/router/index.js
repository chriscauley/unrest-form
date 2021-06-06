import { createRouter, createWebHashHistory } from 'vue-router'

import Basics from '@/views/Basics'
import QuickSchema from '@/views/QuickSchema'

const history = createWebHashHistory()
const routes = [
  { path: '/', component: Basics },
  { path: '/QuickSchema', component: QuickSchema },
]

export default createRouter({ history, routes })
