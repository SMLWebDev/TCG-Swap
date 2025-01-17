<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';

const visible = ref(false)
defineProps(['cardDetails']);
</script>

<template>
    <div class="card">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <h3>{{ cardDetails.name }}</h3>
            <p>{{ cardDetails.types }}</p>
        </Dialog>
    </div>
</template>

<style>
Button {
    width: 10em;
    height: 5em;
}

.card {
    background: beige;
    border: beige;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
</style>    