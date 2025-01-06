import LandingPageLayout from '@/layouts/LandingPageLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () => import('@/views/LandingPage.vue'),
      meta: { layout: LandingPageLayout, isAuth: false },
    },
  ],
})

// router.beforeEach(async (to, _from, next) => {
//     const authStore = useAuthStore()
//     if (to.matched.some((record) => record.meta.requiresAdmin)) {
//       await authStore.saveCurrentAdmin()
//     } else {
//       await authStore.saveCurrentUser()
//     }
//     if (
//       to.matched.some((record) => record.meta.needActivated) &&
//       authStore.userLogin.user?.status === USER_STATUS.INACTIVE
//     ) {
//       // redirect to home page if user is not activated
//       next({ name: 'home' })
//     } else {
//       next()
//     }
//   } else next()
// })

export default router
