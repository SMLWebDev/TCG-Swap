import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { applicationIcons } from '@formkit/icons'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config.ts'
import { VueQueryPlugin } from "@tanstack/vue-query";

import { useAuthStore } from '@/stores/auth.ts'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
app.use(pinia)
const authStore = useAuthStore()
app.use(VueQueryPlugin, {
    enableDevtoolsV6Plugin: true,
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30,
        },
    },
})
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
