<script setup>
import { RouterView } from 'vue-router'

import Navbar from "@/components/Navbar.vue"
import DarkModeSwitch from "@/components/DarkModeSwitch.vue";
</script>

<template>
  <Navbar />
  <DarkModeSwitch />

  <RouterView />
</template>

<style scoped>
</style>
