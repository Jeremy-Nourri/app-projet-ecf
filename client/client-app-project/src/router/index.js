import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormSignup from '../views/FormSignup.vue';
import FormLogin from '../views/FormLogin.vue';
import AccountView from '../views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: FormSignup
    },
    {
      path: '/login',
      name: 'login',
      component: FormLogin
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    }
  ]
})

export default router
