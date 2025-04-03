<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth.ts'

  const authStore = useAuthStore()
  const name = ref('')
  const username = ref('')
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const handleRegister = async () => {
    try {
      await authStore.register(name.value, username.value, email.value, password.value)
      window.location.href = '/profile'
    } catch (error: any) {
      errorMessage.value = error.message
    }
  }
</script>

<template>
  <div class="form-container">

    <FormKit
        type="form"
        @submit="handleRegister"
        submit-label="Register"
        :submit-attrs="{
          outerClass: 'w-full mx-auto',
          inputClass: 'uppercase',
          suffixIcon: 'submit'
        }"
    >

      <h1 class="text-3xl font-bold uppercase underline text-center tracking-widest">Register</h1>

      <div class="form-inputs flex flex-col items-center">
        <FormKit
          v-model="name"
          type="text"
          name="name"
          label="Your Name"
          outer-class="w-full"
          />
        <FormKit
          v-model="username"
          type="text"
          name="username"
          label="Username"
          validation="required"
          :validation-messages="{
            min: 'Please enter a username with 3 or more characters',
          }"
          outer-class="w-full"
          />
        <FormKit
          v-model="email"
          type="email"
          name="email"
          label="Email"
          validation="required|email"
          outer-class="w-full"
          />
        <FormKit
          v-model="password"
          type="password"
          name="password"
          value="super-secret"
          label="Password"
          help="Enter a password"
          validation="required"
          outer-class="w-full"
          />
        <FormKit
          type="password"
          name="password_confirm"
          label="Confirm Password"
          help="Confirm your password"
          validation="required|confirm"
          validation-label="Password confirmation"
          outer-class="w-full"
          />
      </div>
    </FormKit>

    <p v-if="errorMessage">{{ errorMessage }}</p>

<!--    <label for="name">Name</label>-->
<!--    <input v-model="name" type="email" placeholder="Enter name" required />-->

<!--    <label for="username">Username</label>-->
<!--    <input v-model="username" type="email" placeholder="Enter username" required />-->

<!--    <label for="email">Email</label>-->
<!--    <input v-model="email" type="email" placeholder="Enter email" required />-->

<!--    <label for="password">Password</label>-->
<!--    <input v-model="password" type="password" placeholder="Enter password" required />-->

<!--    <button @click="handleRegister">Register</button>-->

<!--    <p v-if="errorMessage">{{ errorMessage }}</p>-->
  </div>
</template>