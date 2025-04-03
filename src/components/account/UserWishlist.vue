<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.ts'

const authStore = useAuthStore()
</script>

<template>
  <div class="profile__details">
    <h1>{{ authStore.user?.username }}'s Wishlist</h1>

    <div class="trades">
      {{ authStore.user?.wishlist }}
    </div>
  </div>
</template>

<style scoped>

</style>