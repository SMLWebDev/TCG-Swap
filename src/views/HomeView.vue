<script setup lang="ts">
import TcgSelector from "@/components/TcgSelector.vue";
</script>

<template>
  <div class="home container mx-auto">
    <div class="text-center flex flex-col gap-6 my-10">
      <h1 class="font-bold tracking-wider text-3xl sm:text-4xl lg:text-6xl uppercase">Welcome to TCG Swap</h1>
      <h2 class="tracking-wider text-md lg:text-xl">The best place to make all your trades and grow your collection!</h2>
      <p class="tracking-wider text-sm">Select the TCG from below to begin your trading journey</p>
    </div>

    <TcgSelector />
  </div>
</template>