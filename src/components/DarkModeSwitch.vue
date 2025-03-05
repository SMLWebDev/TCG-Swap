<script setup>
import { ref } from "vue";
import { Switch } from "@/components/ui/switch/index.js";

const isDark = ref(true)

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <div class="card flex justify-end container mx-auto">
    <p class="text-xs content-center pr-2">Toggle Dark Mode</p>
    <Switch :model-value="isDark" @update:model-value="toggleDarkMode">
    </Switch>
  </div>
</template>