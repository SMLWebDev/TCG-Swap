<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from "@/stores/auth.ts"

const authStore = useAuthStore()
const newPassword = ref("")
const message = ref('')

const handleUpdatePassword = async () => {
  const response = await authStore.updatePassword(newPassword.value)
  message.value = response.message

  if (response.success) {
    setTimeout(() => (window.location.href = '/login'), 2000)
  }
}

onMounted(() => {
  const { user } = authStore
  if (!user) {
    message.value = 'Session expired or invalid. Please try resetting again.'
  }
})
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
            v-model="newPassword"
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