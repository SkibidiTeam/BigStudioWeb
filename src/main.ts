import '@/assets/styles/reset.css'
import '@/assets/styles/global.css'
import '@mdi/font/css/materialdesignicons.css'

import App from '@/App.vue'
import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'

import 'vue3-toastify/dist/index.css'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

import { MotionPlugin } from '@vueuse/motion'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Vue3Toastify, {
  autoClose: 5000,
  hideProgressBar: true,
} as ToastContainerOptions)
app.use(createPinia())
app.use(MotionPlugin)
app.use(router)
router.afterEach((to) => {
  if (to.hash) {
    const element = document.querySelector(to.hash)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
})

app.use(vuetify).mount('#app')
