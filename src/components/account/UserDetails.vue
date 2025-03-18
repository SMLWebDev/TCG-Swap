<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from "@/composable/AuthUser.ts";
import Button from "@/components/ui/button/Button.vue";
import UploadAvatar from "@/components/account/UploadAvatar.vue";

const { user, fetchUser, logout, updateProfile } = useAuth()
const message = ref('')
const avatar_url = ref('')

onMounted(async () => {
  await fetchUser()
})
</script>

<template>
  <div class="profile__details">
    <UploadAvatar v-model:path="avatar_url" @upload="updateProfile" size="10" />

    <h1>Welcome {{ user?.username }}</h1>
    <p>Here you can view your profile, check out your latest trades, update your wishlist or show off your collection! Use the sidebar to navigate through your profile.</p>

    <p>Checkout your latest trades:</p>
    <div class="latest-trades">
      <p>{{ user?.trades }}</p>
    </div>

    <Button variant="ghost" class="w-fit justify-start underline" @click="logout">Logout</Button>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>

</style>