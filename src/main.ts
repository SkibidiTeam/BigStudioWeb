import { createApp } from 'vue'
import 'vue3-toastify/dist/index.css'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 5000,
  hideProgressBar: true,
} as ToastContainerOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
