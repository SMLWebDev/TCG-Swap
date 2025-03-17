<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuth } from "@/composable/AuthUser.ts";

  const { login } = useAuth()
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const handleLogin = async () => {
    const { error } = await login(
        email.value,
        password.value
    )

    if (error) {
      errorMessage.value = error
    } else {
      window.location.href = '/profile'
    }
  }
</script>

<template>
  <div class="form flex flex-col">
    <h1>Login</h1>
    <label for="email">Email</label>
    <input v-model="email" type="email" placeholder="Enter Email" />

    <label for="password">Password</label>
    <input v-model="password" type="password" placeholder="Enter Password" />

    <button @click="handleLogin">Login</button>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>