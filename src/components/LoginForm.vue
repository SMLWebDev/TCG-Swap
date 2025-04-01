<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth.ts'

  const authStore = useAuthStore()
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const handleLogin = async () => {
    try {
      await authStore.login(email.value, password.value)
      window.location.href = '/profile'
    } catch (error: any) {
      errorMessage.value = error.message
    }
  }

  const handleIconClick = (node, e) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
  }
</script>

<template>
  <div class="form-container">


    <FormKit
        type="form"
        @submit="handleLogin"
        submit-label="Login"
        :submit-attrs="{
          outerClass: 'w-full mx-auto',
          inputClass: 'uppercase',
          suffixIcon: 'submit',
        }"
    >

      <h1 class="text-3xl font-bold uppercase underline text-center tracking-widest">Login</h1>
      <p class="text-lg font-thin text-center tracking-wide">Don't already have an account? <RouterLink to="/register" class="underline hover:no-underline">Click here</RouterLink></p>

      <div class="form-inputs flex flex-col items-center">
        <FormKit
            v-model="email"
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="someone@example.com"
            outer-class="w-full"
          />
        <FormKit
            v-model="password"
            type="password"
            label="Password"
            prefix-icon="password"
            suffix-icon="eyeClosed"
            name="password"
            id="password"
            placeholder="Enter Password"
            @suffix-icon-click="handleIconClick"
            suffix-icon-class="hover:text-blue-500"
            outer-class="w-full"
          />
        <p>Forgot your password? Reset it <RouterLink to="/forgotten-password" class="underline hover:no-underline">here</RouterLink></p>

      </div>
    </FormKit>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>