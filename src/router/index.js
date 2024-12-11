import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pokemon from '../views/Pokemon.vue'
import Trader from '../views/Trader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tcg/pokemon',
      name: 'pokemon',
      component: Pokemon
    },
    {
      path: '/trader',
      name: 'trader',
      component: Trader
    }
  ],
})

export default router
