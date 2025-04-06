<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import Navbar from "@/components/Navbar.vue"
</script>

<template>
  <VueQueryDevtools buttonPosition="bottom-left" />
  <Navbar />

  <RouterView />
</template>

<style scoped>
</style>
