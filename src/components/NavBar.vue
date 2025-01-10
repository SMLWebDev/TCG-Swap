<script setup>
    import Menubar from 'primevue/menubar';
    import { ref } from 'vue';

    const items = ref([
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'TCG',
            items: [
                {
                    label: 'Pokemon',
                    route: '/tcg/pokemon'
                }
            ]
        },
        {
            label: 'Trader',
            route: '/trader',
        }
    ]);
</script>

<template>
        <Menubar :model="items" class="container">
            <template #start>
                <div class="image-container">
                    <a href="/">
                        <img src="https://res.cloudinary.com/sml-web-dev/image/upload/v1733502619/tcg-swap-logo.svg" alt="TCG-Logo">
                    </a>
                </div>
            </template>
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                </a>
            </template>
        </Menubar>
</template>

<script>

</script>

<style lang="scss">
@use '../assets/sass/components/navigation/navbar.scss';
</style>