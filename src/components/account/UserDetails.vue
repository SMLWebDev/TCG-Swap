<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from "@/composable/AuthUser.ts";
import Button from "@/components/ui/button/Button.vue";
import UploadAvatar from "@/components/account/UploadAvatar.vue";

const { user, fetchUser, logout, updateProfile } = useAuth()
const message = ref('')
const avatarUrl = ref('')

onMounted(async () => {
  await fetchUser()
  avatarUrl.value = user.value?.avatar_url || ''
})

const handleAvatarUpdate = (newAvatarUrl: string) => {
  avatarUrl.value = newAvatarUrl
}
</script>

<template>
  <div class="profile__details">
    <img  :src="user?.avatar_url" alt="User Avatar" width="100" />

    <h1>Welcome {{ user?.username }}</h1>
    <p>Here you can view your profile, check out your latest trades, update your wishlist or show off your collection! Use the sidebar to navigate through your profile.</p>

    <p>Checkout your latest trades:</p>
    <div class="latest-trades">
      <p>{{ user?.trades }}</p>
    </div>

    <div class="flex flex-row justify-between">
      <Button variant="ghost" class="w-fit justify-start underline" @click="logout">Logout</Button>
      <UploadAvatar @avatarUploaded="handleAvatarUpdate" />
    </div>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>

</style>