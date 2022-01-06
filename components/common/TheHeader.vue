<script>
    import TheHeaderTop from "~/components/common/TheHeaderTop";
    import TheHeaderMain from "~/components/common/TheHeaderMain";
    export default {
        name: "TheHeader",
        components: { TheHeaderMain, TheHeaderTop },
    };
</script>

<template>
    <header class="the-header">
        <the-header-top></the-header-top>
        <the-header-main></the-header-main>
    </header>
</template>

<style lang="scss">
    .the-header {
        display: contents;
    }
</style>
