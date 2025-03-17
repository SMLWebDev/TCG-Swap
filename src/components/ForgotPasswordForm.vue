<script setup lang="ts">
import { ref } from 'vue'
import useAuthUser from '@/composable/AuthUser.ts'
import {Button} from "@/components/ui/button/index.js";

const { sendPasswordReset } = useAuthUser()

const email = ref('')

const handlePasswordReset = async () => {
  await sendPasswordReset(email.value)
  alert(`Password reset email sent to: ${email.value}`)
}
</script>

<template>
  <form class="max-w-lg m-auto" @submit.prevent="handlePasswordReset()">
    <h1 class="text-3xl mb-5">Forgot Password</h1>
    <label for="email">Email:</label>
    <input v-model="email" id="email" type="email" name="email" placeholder="Enter Email" required />
    <Button>Send Reset Link</Button>
  </form>
</template>

<style scoped>

</style>