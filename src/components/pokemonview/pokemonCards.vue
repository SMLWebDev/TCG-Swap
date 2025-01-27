<script setup>
import { usePokemonStore } from '@/stores/pokemonStore';


const pokemonStore = usePokemonStore();
pokemonStore.getPokemon();

</script>

<template>
   <div class="container">

      <input 
         type="text" 
         v-model="pokemonStore.theQuery"
         id="search"
         name="search"
         class="search__input"
         placeholder="Search..."
      >

      <div class="cards-container">

         <div class="pokemon-cards">
            <div v-for="p in pokemonStore.searched">
               <img :src=p.images.large :alt=p.name>
            </div>
         </div>

      </div>

   </div>
</template>

<style lang="scss">
@use '../../assets/sass/components/pokemonCards.scss';
</style>