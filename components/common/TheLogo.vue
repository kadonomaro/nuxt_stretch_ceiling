<script>
    export default {
        name: "TheLogo",
    };
</script>

<template>
    <NuxtLink class="the-logo" :to="{ name: 'index' }">
        <img src="/images/logo.svg" alt="Натяжные потолки" />
    </NuxtLink>
</template>

<style lang="scss">
    .the-logo {
        display: block;
        img {
            width: 60px;
            @include bp($bp-desktop-sm) {
                width: 80px;
            }
        }

        &.nuxt-link-exact-active {
            pointer-events: none;
            cursor: default;
        }
    }
</style>
