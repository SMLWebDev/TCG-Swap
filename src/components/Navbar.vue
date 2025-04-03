<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import {NavigationMenu, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu/index.js";
  import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet/index.js";

  import { Menu } from 'lucide-vue-next'

  const isOpen = ref(false)
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
  <header class="h-28 container mx-auto bg-[222.2 84% 4.9%] border-b bg-muted/40 flex justify-between px-6 my-6 rounded-lg shadow-sm shadow-slate-500 items-center">
    <div class="w-full flex justify-between">
      <RouterLink to="/">
        <img src="https://res.cloudinary.com/sml-web-dev/image/upload/v1733502619/tcg-swap-logo.svg" alt="TCG Logo">
      </RouterLink>

      <!-- Mobile Navigation -->
      <div class="flex md:hidden">
        <Sheet v-model:open="isOpen">
          <SheetTrigger @click="isOpen"><Menu :size="32" /></SheetTrigger>
          <SheetContent side="right">
            <ul>
              <li v-for="item in items" :key="item.label">
                <RouterLink :to="item.route" @click="isOpen=false">
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      <!-- Desktop Navigation -->
      <NavigationMenu class="hidden md:flex">
        <NavigationMenuList>
          <ul class="flex items-center justify-between gap-10 text-xl uppercase">
            <li v-for="item in items" :key="item.label">
              <NavigationMenuLink>
                <RouterLink :to="item.route">
                  {{ item.label }}
                </RouterLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
</template>

<style scoped>

</style>