<script>
    import TheHeader from "~/components/common/TheHeader";
    import TheFooter from "~/components/common/TheFooter";

    export default {
        name: "DefaultLayout",
        components: { TheFooter, TheHeader },
    };
</script>

<template>
    <div class="default-layout">
        <the-header></the-header>
        <Nuxt />
        <the-footer></the-footer>
    </div>
</template>

<style lang="scss">
    .default-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
