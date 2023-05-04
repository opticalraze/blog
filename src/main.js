import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

createApp(App)
.use(router)
.use(VueGtag, {
    config: { id: "G-9Z3MH28VEJ" }
})
.mount('#app')
