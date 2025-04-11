<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useQuery } from '@tanstack/vue-query'
  import axios from 'axios'

  import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
  } from '@/components/ui/table'

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

  const getPriceTypes = (card: any) => {
    try {
      return Object.entries(card?.tcgplayer?.prices || {})
    } catch (e) {
      console.error(e)
    }

  }
</script>

<template>
  <div>
    <div v-if="isLoading">Loading card details...</div>
    <div v-else-if="isError">Failed to load card details</div>
    <div v-else class="flex flex-row justify-between">
      <img class="rounded" :src="card.images.small" :alt="card.name">
      <div class="flex-flex-col w-1/2">
        <h1>{{ card.name }}</h1>
        <p>{{ card.supertype }}</p>
        <p>{{ card.set.name }}</p>

        <hr class="my-10" />

        <Table>
          <TableHeader>
            <TableHead>PriceType</TableHead>
            <TableHead>Market</TableHead>
            <TableHead>High</TableHead>
            <TableHead>Mid</TableHead>
            <TableHead>Low</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow v-for="[key, value] in getPriceTypes(card)">
              <TableCell>{{ key }}</TableCell>
              <TableCell>${{ value.market || "N/A" }}</TableCell>
              <TableCell>${{ value.high || "N/A" }}</TableCell>
              <TableCell>${{ value.mid || "N/A" }}</TableCell>
              <TableCell>${{ value.low || "N/A" }}</TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>Please note all prices are from <a href="https://www.tcgplayer.com/" target="_blank" class="underline hover:no-underline">TCG Player</a> and are in US Dollar</TableCaption>
        </Table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
