import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormSignup from '../views/FormSignup.vue';
import FormLogin from '../views/FormLogin.vue';
import AccountView from '../views/AccountView.vue';
import CreateProjectView from '../views/CreateProjectView.vue';

// import { useAuthStore } from '@/stores/auth';


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
      component: AccountView,
    },
    {
      path: '/create-project',
      name: 'create-project',
      component: CreateProjectView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const { isLoggedIn } = useAuthStore(); 
//   if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });


export default router
