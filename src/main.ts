import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//config
import config from './config/config.json'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('config', config)

app.mount('#app')
