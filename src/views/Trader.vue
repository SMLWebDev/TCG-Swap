<script setup>
import SelectPokemon from '@/components/trader/SelectPokemon.vue';
import SelectMTG from '@/components/trader/SelectMTG.vue';
import SelectYuGiOh from '@/components/trader/SelectYuGiOh.vue';
import {  ref } from 'vue';
import { Select } from 'primevue';


const selectedTCG = ref('')

const tcgoptions = ref([
   {
      name: "Pokemon",
      value: "Pokemon"
   },
   {
      name: "MTG",
      value: "MTG"
   },
   {
      name: "Yu-Gi-Oh",
      value: "Yu-Gi-Oh"
   }
]);

</script>

<template>
   <div class="trader-hero">
      <h1>The Trader</h1>
      <p>Use the tool below to ensure your TCG trades are always fair and balanced.</p>
   </div>

   <div class="container">
      <div class="how-to">
         <h3>How to use the Trader</h3>
         <p>Use the space below to add the card you wish to trade for, while adding the card you want on the right.
            The light in between the cards show if the trade is good (green), ok (orange, normally because you are giving away more cards than receiving) or bad (red).</p>
      </div>
      
      <ul>
         <li v-for="card in filteredCard" :key="card.id">{{ card.name }}</li>
      </ul>

      <div class="trader">
         <div class="select-tcg">
            <Select v-model="selectedTCG" :options="tcgoptions" optionLabel="name" placeholder="Select TCG..." />
         </div>
         
         <div v-if="selectedTCG.name === 'Pokemon'" class="container">
            <SelectPokemon
               :selectedTCG="selectedTCG"
            />
         </div>
         <div v-else-if="selectedTCG.name === 'MTG'" class="container">
            <SelectMTG
               :selectedTCG="selectedTCG"
            />
         </div>
         <div v-else-if="selectedTCG.name === 'Yu-Gi-Oh'" class="container">
            <SelectYuGiOh
               :selectedTCG="selectedTCG"
            />
         </div>
      </div>
   </div>
</template>

<style lang="scss">
@use '../assets/sass/views/trader.scss';
</style>