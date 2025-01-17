import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pokemon from '../views/pokemon/Pokemon.vue'
import Trader from '../views/Trader.vue'
import SinglePokemon from '../views/pokemon/SinglePokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tcg/pokemon/',
      name: 'pokemon',
      component: Pokemon,
    },
    {
      path: '/tcg/pokemon/single',
      name: 'single',
      component: SinglePokemon,
    },
    {
      path: '/trader',
      name: 'trader',
      component: Trader,
    }
  ],
})

export default router
