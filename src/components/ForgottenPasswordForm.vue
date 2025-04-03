<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.ts'

const authStore = useAuthStore()
const email = ref('')
const message = ref('')

const handlePasswordReset = async () => {
  const response = await authStore.forgotPassword(email.value)
  message.value = response.message
}

</script>

<template>
  <div class="form-container">


      <FormKit
          type="form"
          @submit="handlePasswordReset"
          submit-label="Reset Password"
          :submit-attrs="{
              outerClass: 'w-full mx-auto',
              inputClass: 'uppercase',
              suffixIcon: 'submit',
            }"
      >
        <div class="form-inputs flex flex-col items-center">
          <h1 class="text-3xl font-bold uppercase underline text-center tracking-widest">Forgotten Password</h1>
          <FormKit
            v-model="email"
            type="email"
            label="Please enter your email"
            placeholder="Email"
            outer-class="w-full"
            />
        </div>
      </FormKit>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>

</style>