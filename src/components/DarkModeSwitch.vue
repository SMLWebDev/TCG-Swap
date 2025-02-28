<script setup>
import {ref} from "vue";

const checked = ref(false)

function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark')
}
</script>

<template>
  <div class="card flex justify-end container mx-auto">
    <p class="text-xs content-center pr-2">Toggle Dark Mode</p>
    <ToggleSwitch v-model="checked" @click="toggleDarkMode()">
      <template #handle="{ checked }">
        <i class="['!text-xs pi', { 'pi-sun': checked, 'pi-moon': checked }] " />
      </template>
    </ToggleSwitch>
  </div>
</template>