<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composable/AuthUser.js'
import { useRouter } from "vue-router";
import {Button} from "@/components/ui/button/index.js";

const router = useRouter()
const { login, loginWithSocialProvider } = useAuthUser()

const form = ref({
  email: "",
  password: "",
})

const handleLogin = async (provider) => {
  try {
    provider ? await loginWithSocialProvider(provider) : await login(form.value)
    await router.push({ name: "Me" })
  } catch (error) {
    alert(error.message)
  }
}
</script>

<template>
  <form class="max-w-2xl m-auto flex flex-col p-10 rounded-lg" @submit.prevent="handleLogin">
    <h1 class="text-4xl underline uppercase font-bold text-center mb-5 dark:text-white text-black">Login</h1>
    <label for="email">Email:</label>
    <input v-model="form.email" type="email" id="email" name="email" required />

    <label for="password">Password:</label>
    <input v-model="form.password" type="password" name="password" id="password" required />

    <Button type="submit">Login</Button>

    <RouterLink to="/forgotPassword">Forgot Password</RouterLink>
  </form>

  <div class="mt-5">
    <a @click.prevent="handleLogin('github')">Github</a>
  </div>
</template>

<style scoped>

</style>