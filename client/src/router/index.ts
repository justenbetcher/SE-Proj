import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import SignInView from '../views/SignInView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignInView
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
  ]
})

export default router
