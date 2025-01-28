<script setup>
import { usePokemonStore } from '@/stores/pokemonStore';


const pokemonStore = usePokemonStore();
pokemonStore.getPokemon();

</script>

<template>
   <div class="container pokemon-cards-container">

      <div class="search-results">
         <div class="search-bar">
            <input 
               type="text" 
               v-model="pokemonStore.theQuery"
               id="search"
               name="search"
               class="search__input"
               placeholder="Search..."
            >
            <button @click="searchQuery = pokemonStore.searchPokemon(pokemonStore.theQuery)"><i class="pi pi-search"></i></button>
         </div>
         <div class="pokemon-cards">
            <div v-for="p in pokemonStore.searchResult">
               <img :src=p.images.large :alt=p.name>
            </div>
         </div>
      </div>

      <div class="cards-container">

         <button @click="pokemonStore.nextPage()">Next</button>
         <p>{{ pokemonStore.page }}</p>

         <div class="pokemon-cards">
            <div v-for="p in pokemonStore.pokemons">
               <img :src=p.images.large :alt=p.name>
            </div>
         </div>

      </div>

   </div>
</template>

<style lang="scss">
@use '../../assets/sass/components/pokemonCards.scss';
</style>