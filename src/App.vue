<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header v-bind:class="{ notHomeNavColor: navBarColor }">
      <NavBar />
  </header>

  <RouterView />
</template>

<script>
export default {
  computed: {
    navBarColor() {
      return this.$route.path !== '/';
    }
  }
}
</script>

<style scoped>
.notHomeNavColor {
  background-color: #000000;
}
</style>
