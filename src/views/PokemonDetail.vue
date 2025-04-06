<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useQuery } from '@tanstack/vue-query'
  import axios from 'axios'

  const route = useRoute()
  const cardId = route.params.id

  const { data: card, isLoading, isError } = useQuery({
    queryKey: ['card', cardId],
    queryFn: async () => {
      const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${cardId}`, {
        headers: {
          'X-Api-Key': import.meta.env.VITE_POKEMON_API_KEY,
        },
      })
      return response.data.data
    },
  })
</script>

<template>
  <div>
    <div v-if="isLoading">Loading card details...</div>
    <div v-else-if="isError">Failed to load card details</div>
    <div v-else>
      <img :src="card.images.small" :alt="card.name">
      <h2>{{ card.name }}</h2>
      <p>{{ card.supertype }}</p>
      <p>{{ card.set.name }}</p>
      <p>{{ card.tcgplayer.prices }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>