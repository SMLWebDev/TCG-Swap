<template>
   <div class="container">
    <h1 class="pokemon-title">All Pok&#233;mon</h1>

    <h2 class="loading-message" v-if="loading">Loading your cards</h2>
    <div v-if="error">{{ error }}</div>
    <ul class="pokemon-cards" v-if="allCards">
      <li v-for="cards in allCards.data" :key="cards.id">
         <router-link :to="cards.id">
            <img v-bind:id="cards.id" :src="cards.images.small" :alt="cards.name">
         </router-link>
      </li>
    </ul>
   </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAllCards } from '@/api/pokemon/allCards';

export default {
   props: ['cardid'],
   setup(props) {
      const allCards = ref(null);
      const loading = ref(true);
      const error = ref(null);
      console.log(props.allCards.data.id)

      onMounted(async () => {
         try {
            allCards.value = await getAllCards();
         } catch (err) {
            error.value = err.message;
         } finally {
            loading.value = false;
         }
      });
      return { allCards, loading, error }
   },
}
</script>

<style lang="scss">
@use '../assets/sass/views/pokemonview.scss';
</style>