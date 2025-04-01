<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth.ts'

  const authStore = useAuthStore()

  const password = ref('')
  const message = ref('')
  const { updatePassword } = useAuth()

  console.log('useAuth() output: ', updatePassword)

  const handleUpdatePassword = async () => {
    if (!password.value) {
      message.value = 'Please enter a new password'
      return
    }

    if (password.value.length < 6) {
      message.value = 'Password must be at least 6 characters long'
      return
    }

    const result = await authStore.updatePassword(password.value)
    if (result?.error) {
      message.value = result.error
    }
  }
</script>

<template>
  <div class="form-container">


    <FormKit
        type="form"
        @submit="handleUpdatePassword"
        submit-label="Update Password"
        :submit-attrs="{
              outerClass: 'w-full mx-auto',
              inputClass: 'uppercase',
              suffixIcon: 'submit',
            }"
    >
      <div class="form-inputs flex flex-col items-center">
        <h1 class="text-3xl font-bold uppercase underline text-center tracking-widest">Update Password</h1>
        <FormKit
            v-model="password"
            type="password"
            label="Please enter your new password"
            placeholder="Password"
            outer-class="w-full"
        />
        <p v-if="message">{{ message }}</p>
      </div>
    </FormKit>
  </div>
</template>

<style scoped>

</style>