<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.ts'

const authStore = useAuthStore()

// import UploadAvatar from "@/components/account/UploadAvatar.vue";
import Logout from '@/components/Logout.vue'

// const { user, fetchUser, updateProfile } = useAuth()
// const message = ref('')
// const avatarUrl = ref('')
//
// onMounted(async () => {
//   await fetchUser()
//   avatarUrl.value = user.value?.avatar_url || ''
// })

// const handleAvatarUpdate = (newAvatarUrl: string) => {
//   avatarUrl.value = newAvatarUrl
// }
</script>

<template>
  <div v-if="authStore.user" class="profile__details">
    <img  :src="authStore.user.avatar_url" alt="User Avatar" width="100" />

    <h1>Welcome {{ authStore.user.name }}</h1>
    <p>Here you can view your profile, check out your latest trades, update your wishlist or show off your collection! Use the sidebar to navigate through your profile.</p>

    <p>Checkout your latest trades:</p>
    <div class="latest-trades">
      <p>{{ authStore.user.trades }}</p>
    </div>

    <div class="flex flex-row justify-between">
      <Logout />
<!--      <UploadAvatar @avatarUploaded="handleAvatarUpdate" />-->
    </div>
  </div>

  <p v-else>Loading user data...</p>
</template>

<style scoped>

</style>