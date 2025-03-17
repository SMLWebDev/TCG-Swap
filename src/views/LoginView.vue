<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
</script>

<template>
  <div class="container mx-auto">
    <h1>Login</h1>
    <p>Need to register a new account? <RouterLink to="/register" class="underline hover:no-underline">Click here</RouterLink></p>

    <LoginForm />
  </div>
</template>

<style scoped>

</style>