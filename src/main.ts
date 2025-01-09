import '@/assets/styles/reset.css'
import '@/assets/styles/global.css'

import App from '@/App.vue'
import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'

import 'vue3-toastify/dist/index.css'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

import { MotionPlugin } from '@vueuse/motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Vue3Toastify, {
  autoClose: 5000,
  hideProgressBar: true,
} as ToastContainerOptions)
app.use(createPinia())
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
