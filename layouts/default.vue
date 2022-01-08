<script>
    import TheHeader from "~/components/common/TheHeader";
    import TheFooter from "~/components/common/TheFooter";
    import TheModal from "~/components/common/TheModal";

    export default {
        name: "DefaultLayout",
        components: { TheModal, TheFooter, TheHeader },
    };
</script>

<template>
    <div class="default-layout">
        <the-header></the-header>
        <Nuxt />
        <the-footer></the-footer>
        <the-modal></the-modal>
    </div>
</template>

<style lang="scss">
    .default-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
