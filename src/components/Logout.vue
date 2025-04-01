<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.ts";

const authStore = useAuthStore();

import Button from "./ui/button/Button.vue";
</script>

<template>
  <Button variant="ghost" class="w-fit justify-start underline" @click="authStore.logout()">Logout</Button>
</template>