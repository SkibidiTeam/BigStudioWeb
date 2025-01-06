import '@/assets/styles/reset.css'

import App from '@/App.vue'
import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'

import 'vue3-toastify/dist/index.css'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 5000,
  hideProgressBar: true,
} as ToastContainerOptions)
app.use(createPinia())
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
