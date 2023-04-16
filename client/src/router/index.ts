import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '../views/SignInView.vue'
import BudgetView from '../views/BudgetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignInView
    },
    {
      path: '/budget',
      name: 'budget',
      component: BudgetView
    },
  ]
})

export default router
