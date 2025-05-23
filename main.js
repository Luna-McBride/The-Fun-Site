import './assets/main.css'
import { makeRouter } from './router'
import { createApp } from 'vue'
import App from './App.vue'

let funRouter = makeRouter()

createApp(App).use(funRouter).mount('#app')