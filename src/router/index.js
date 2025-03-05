import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import * as path from "node:path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/trader',
      name: 'trader',
      component: () => import('@/views/TraderView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/email-confirmation',
      name: 'EmailConfirmation',
      component: () => import('@/views/EmailConfirmation.vue'),
    }
  ],
})

export default router
