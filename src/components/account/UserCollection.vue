<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.ts'

const authStore = useAuthStore()
</script>

<template>
  <div class="profile__details">
    <h1>{{ authStore.user?.username }}'s Collection</h1>

    <div class="trades">
      {{ authStore.user?.collection }}
    </div>
  </div>
</template>

<style scoped>

</style>