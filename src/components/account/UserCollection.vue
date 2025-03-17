<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuth } from '@/composable/AuthUser.ts'

const { user, fetchUser } = useAuth()

onMounted(async () => {
  await fetchUser()
})
</script>

<template>
  <div class="profile__details">
    <h1>{{ user?.username }}'s Collection</h1>

    <div class="trades">
      {{ user?.collection }}
    </div>
  </div>
</template>

<style scoped>

</style>