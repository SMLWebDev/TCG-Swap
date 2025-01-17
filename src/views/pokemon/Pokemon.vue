<template>
   <div class="container">
    <h1 class="pokemon-title">All Pok&#233;mon</h1>

    <h2 class="loading-message" v-if="loading">Loading your cards</h2>
    <div v-if="error">{{ error }}</div>
    <ul class="pokemon-cards" v-if="allCards">
      <li v-for="cards in allCards.data" :key="cards.id">
         <img v-bind:id="cards.id" :src="cards.images.small" :alt="cards.name">
         <SingleCardModal
            :cardDetails="cards"
         />
      </li>
    </ul>
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAllCards } from '@/api/pokemon/allCards';
import SingleCardModal from '../../components/SingleCardModal.vue';

const allCards = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
         try {
            allCards.value = await getAllCards();
         } catch (err) {
            error.value = err.message;
         } finally {
            loading.value = false;
         }
         return { allCards, loading, error }
      });
      
</script>


<style lang="scss">
@use '../../assets/sass/views/pokemonview.scss';
</style>