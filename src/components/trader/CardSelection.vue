<script setup>
import { Dialog, Button } from 'primevue';
import { ref, onBeforeMount } from 'vue';
import { getAllCards } from '@/api/pokemon/allCards';

const visible = ref(false);
const allCards = ref(null);
const text = ref('');

onBeforeMount(async () => {
    allCards.value = await getAllCards();
    return { allCards }
})
</script>

<template>
    <Button label="Show" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Select your card">
        <input v-model="text" placeholder="Search..." />
        <p>{{ text }}</p>

        <ul class="single-card-select">
            <li v-for="card in allCards.data" :key="card.id">
                <img v-bind:id="card.id" :src="card.images.small" :alt="card.name">
            </li>
        </ul>
    </Dialog>
</template>

<style lang="scss">
@use '../../assets/sass/components/cardSelection.scss';
</style>