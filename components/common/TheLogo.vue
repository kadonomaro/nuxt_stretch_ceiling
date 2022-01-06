<script>
    export default {
        name: "TheLogo",
    };
</script>

<template>
    <NuxtLink class="the-logo" :to="{ name: 'index' }">
        <img src="https://via.placeholder.com/100" alt="" />
    </NuxtLink>
    <!--    <div class="the-logo">-->
    <!--        <img src="https://via.placeholder.com/100" alt="" />-->
    <!--    </div>-->
</template>

<style lang="scss">
    .the-logo {
        &.nuxt-link-exact-active {
            pointer-events: none;
            cursor: default;
        }
    }
</style>
