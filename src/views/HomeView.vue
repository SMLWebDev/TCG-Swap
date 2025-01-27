+<script setup>
import tcgSelector from '../components/tcgSelector.vue';
</script>

<template>
  <main>
    <div class="hero">
      <div class="hero-image">
        <img src="https://res.cloudinary.com/sml-web-dev/image/upload/v1734192207/two-people-cards_ziawob.png" alt="Playing TCG">
      </div>

      <div class="hero-content">
        <div class="hero-container">
          <h4>Welcome To</h4>
          <h1>TCG Swap</h1>
          <p>The best place to make your trades</p>
        </div>
      </div>
    </div>

    <div class="selection container">
      <h2>Pick your TCG below</h2>

      <tcgSelector />
    </div>
  </main>
</template>

<style lang="scss">
@use '../assets/sass/views/homeview.scss';
</style>