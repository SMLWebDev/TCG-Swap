<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from "@/composable/AuthUser.ts";
import Button from "@/components/ui/button/Button.vue";

const { user, fetchUser, logout } = useAuth()
const message = ref('')

onMounted(async () => {
  await fetchUser()
})
</script>

<template>
  <div class="profile__details">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLXJvdW5kLXBsdXMiPjxwYXRoIGQ9Ik0yIDIxYTggOCAwIDAgMSAxMy4yOTItNiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0xOSAxNnY2Ii8+PHBhdGggZD0iTTIyIDE5aC02Ii8+PC9zdmc+" alt="Avatar" class="w-20 h-20 bg-gray-600 rounded-xl" />

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