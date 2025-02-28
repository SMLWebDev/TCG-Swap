<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const items = ref([
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Trader',
      route: '/trader',
    },
    {
      label: 'Login/Register',
      route: '/login',
    }
  ])
</script>

<template>
  <div class="m-2">
    <Menubar :model="items" class="container mx-auto">
        <template #start>
          <img src="../assets/tcg-swap-logo.svg" alt="TCG Swap Logo">
        </template>

        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a class="text-xl" v-ripple :href="href" v-bind="props.action" @click="navigate">
                {{ item.label }}
              </a>
            </router-link>
        </template>
    </Menubar>
  </div>
</template>

<style scoped>

</style>