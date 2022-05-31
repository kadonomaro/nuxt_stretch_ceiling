<script>
    export default {
        name: "TheLogo",
    };
</script>

<template functional>
    <NuxtLink class="the-logo" :to="{ name: 'index' }">
        <img src="/images/logo.svg" alt="Натяжные потолки" />
    </NuxtLink>
</template>

<style lang="scss">
    .the-logo {
        display: block;
        img {
            height: 50px;
            @include bp($bp-desktop-sm) {
                height: 60px;
            }
        }

        &.nuxt-link-exact-active {
            pointer-events: none;
            cursor: default;
        }
    }
</style>
