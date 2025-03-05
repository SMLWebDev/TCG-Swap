<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composable/AuthUser.js'
import { useRouter } from "vue-router";

import {Button} from '@/components/ui/button/index.js';

const router = useRouter();
const { register } = useAuthUser();

const form = ref({
  name: "",
  email: "",
  password: "",
})

const handleSubmit = async () => {
  try {
    await register(form.value);

    await router.push({
      name: "EmailConfirmation",
      query: {email: form.value.email},
    });
  } catch (error) {
    alert(error.message);
  }
}

</script>

<template>
  <form class="max-w-2xl m-auto flex flex-col p-10 rounded-lg" @submit.prevent="handleSubmit">
    <h1 class="text-4xl underline uppercase font-bold text-center mb-5 dark:text-white text-black">Register</h1>
    <label>Name:</label>
    <input v-model="form.name" type="text">

    <label>Email:</label>
    <input v-model="form.email" type="email">

    <label>Password:</label>
    <input v-mode="form.password" type="password">
    <Button type="submit" class="mt-5 hover:bg-blue-950">Register</Button>
  </form>
</template>

<style scoped>

</style>