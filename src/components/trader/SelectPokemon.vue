<script setup>

import CardSelection from './CardSelection.vue';

defineProps(['selectedTCG']);
</script>

<template>
    <h1>{{ selectedTCG.name }}</h1>

    <div class="selector-container">

        <div class="selector-content">
            <p>Your Card</p>
            <div class="select-card">
                <p>Select Card</p>
            </div>

            <CardSelection />
        </div>

        <div class="selector-content">
            <p>Their Card</p>
            <div class="select-card">
                <p>Select Card</p>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
@use '../../assets/sass/components/selectTCG.scss';
</style>