<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuth } from '@/composable/AuthUser.ts'

  const { register } = useAuth()
  const name = ref('')
  const username = ref('')
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const handleRegister = async () => {
    const { error } = await register(
        name.value,
        username.value,
        email.value,
        password.value,
    )

    if (error) {
      errorMessage.value = error
    } else {
      window.location.href = '/profile'
    }
  }
</script>

<template>
  <div class="flex flex-col">
    <h1>Register</h1>
    <label for="name">Name</label>
    <input v-model="name" type="email" placeholder="Enter name" required />

    <label for="username">Username</label>
    <input v-model="username" type="email" placeholder="Enter username" required />

    <label for="email">Email</label>
    <input v-model="email" type="email" placeholder="Enter email" required />

    <label for="password">Password</label>
    <input v-model="password" type="password" placeholder="Enter password" required />

    <button @click="handleRegister">Register</button>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>