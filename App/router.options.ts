import type { RouterConfig } from '@nuxt/schema'
import App from '../pages/App.vue'
import Farm from '../pages/farm/Farm.vue'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
        path: '/',
        name: 'welcome',
        component: App,
        meta: { title: 'Welcome!' }
    },
    {
        path: '/farm',
        name: 'farm',
        component: Farm,
        meta: { title: 'On the Farm!' }
    }
],
} satisfies RouterConfig