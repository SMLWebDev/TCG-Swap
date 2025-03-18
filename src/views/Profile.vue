<script setup lang="ts">
import { ref } from 'vue';

import userDetails from '@/components/account/UserDetails.vue'
import userWishlist from "@/components/account/UserWishlist.vue";
import userCollection from "@/components/account/UserCollection.vue";
import userTrades from "@/components/account/UserTrades.vue";

import Button from '@/components/ui/button/Button.vue'


const showdetails = ref('accountDetails');
</script>

<template>
  <div class="profile-screen">

    <div class="sidebar">
      <Button variant="secondary" class="sidebar__button" @click="showdetails = 'accountDetails'">Account Details</Button>
      <Button variant="secondary" class="sidebar__button" @click="showdetails = 'userInformation'">User Information</Button>
      <Button variant="secondary" class="sidebar__button" @click="showdetails = 'wishlist'">Wishlist</Button>
      <Button variant="secondary" class="sidebar__button" @click="showdetails = 'collection'">Collection</Button>
      <Button variant="secondary" class="sidebar__button" @click="showdetails = 'trades'">Trades</Button>
    </div>

    <userDetails v-if="showdetails == 'accountDetails'" />

    <userWishlist v-else-if="showdetails == 'wishlist'" />

    <userCollection v-else-if="showdetails == 'collection'" />

    <userTrades v-else-if="showdetails == 'trades'" />

  </div>
</template>