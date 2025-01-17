<script setup>
import SelectPokemon from '@/components/SelectPokemon.vue';
import { ref } from 'vue';

const notSelected = ref(true);
const selectedOption = null;

const options = [
   {
      label: "Pokemon",
      value: "Pokemon"
   },
   {
      label: "MTG",
      value: "MTG"
   },
   {
      label: "Yu-Gi-Oh",
      value: "Yu-Gi-Oh"
   }
];

function handleOptionChange() {
   console.log(this.selectedOption)
}
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

      <div class="trader">
         <h4>Your Card</h4>

         <h5>Select TCG</h5>
         <select v-model="selectedOption" @change="handleOptionChange" name="select" id="select">
            <option v-for="option in options" :value="option.value">{{ option.label }}</option>
         </select>
         
         <div v-if="pokemon"></div>
         <div v-if="notSelected" class="card-selector">Select</div>
         <div v-else class="card-selector">Already Selected</div>
         <button @click="notSelected = !notSelected">Select Card</button>
         <SelectPokemon />
      </div>
   </div>
</template>

<style lang="scss">
@use '../assets/sass/views/trader.scss';
</style>