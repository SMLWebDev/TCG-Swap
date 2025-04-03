<script setup lang="ts">

</script>

<template>
  <div class="flex flex-row flex-wrap justify-between items-center container mx-auto">
    <RouterLink to="/pokemon">
      <div class="logo-container">
        <img src="https://res.cloudinary.com/sml-web-dev/image/upload/v1740752890/pokemon-logo_g4lmnv.webp" alt="Pokemon Logo">
      </div>
    </RouterLink>
    <RouterLink to="/mtg">
      <div class="logo-container">
        <img src="https://res.cloudinary.com/sml-web-dev/image/upload/v1741698940/magic-the-gathering-logo_zhsyfx.png" alt="MTG Logo">
      </div>
    </RouterLink>
    <RouterLink to="/yugioh">
      <div class="logo-container">
        <img src="https://res.cloudinary.com/sml-web-dev/image/upload/v1741698940/yu-gi-oh-logo_ozifvj.png" alt="Yu-Gi-Oh Logo">
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>