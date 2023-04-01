import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue';
import EntryView from '../views/EntryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView,
    },
    {
      path: '/entry',
      name: 'entry',
      component: EntryView,
    }
  ]
})

export default router
