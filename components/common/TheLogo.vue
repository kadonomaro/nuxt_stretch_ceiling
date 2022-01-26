<script>
    export default {
        name: "TheLogo",
    };
</script>

<template>
    <NuxtLink class="the-logo" :to="{ name: 'index' }">
        <picture>
            <source
                media="(max-width: 991px)"
                srcset="/images/logo--mobile.png"
            />
            <img src="/images/logo.png" alt="Натяжные потолки" />
        </picture>
    </NuxtLink>
</template>

<style lang="scss">
    .the-logo {
        display: block;
        img {
            width: 150px;
            @include bp($bp-desktop-sm) {
                width: 120px;
            }
        }

        &.nuxt-link-exact-active {
            pointer-events: none;
            cursor: default;
        }
    }
</style>
