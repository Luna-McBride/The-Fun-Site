import App from './App.vue'
import Farm from './farm/Farm.vue'
import { createWebHistory, createRouter } from 'vue-router'
 

export function makeRouter(){
    const routes = [
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
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    return router
}