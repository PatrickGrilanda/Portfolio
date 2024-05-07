import './assets/css/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { HiChatAlt2, HiHome, HiSolidMenu, HiSolidMoon, HiSolidSun } from "oh-vue-icons/icons"
import {messages} from '@/storage/lang/translations.js'

addIcons(HiChatAlt2, HiHome, HiSolidMenu, HiSolidMoon, HiSolidSun)

const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages,
})

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
