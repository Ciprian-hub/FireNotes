
import './index.css'
import {createApp, markRaw} from 'vue'
import { createPinia } from 'pinia'
import router from "@/router/index.js";
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({store}) =>{
    store.router = markRaw(router)
})
app.use(router)
    .use(pinia)
    .mount('#app')
