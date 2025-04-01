import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import * as path from "node:path";
import { useAuthStore } from "@/stores/auth.ts";

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
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/pokemon',
      name: 'pokemonView',
      component: () => import('@/views/PokemonView.vue'),
    },
    {
      path: '/mtg',
      name: 'mtgView',
      component: () => import('@/views/MTGView.vue'),
    },
    {
      path: '/yugioh',
      name: 'yugiohView',
      component: () => import('@/views/YuGiOhView.vue'),
    },
    {
      path: '/forgotten-password',
      name: 'forgottenPassword',
      component: () => import('@/views/ForgottenPassword.vue'),
    },
    {
      path: '/profile/update-password',
      name: 'updatePassword',
      component: () => import('@/views/NewPasswordReset.vue'),
    }
  ],
})

router.beforeEach(async(to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
