<script>
    import TheHeaderTop from "~/components/common/TheHeaderTop";
    import TheHeaderMain from "~/components/common/TheHeaderMain";
    import TheHeaderMobile from "~/components/common/TheHeaderMobile";

    export default {
        name: "TheHeader",
        components: { TheHeaderMobile, TheHeaderMain, TheHeaderTop },
    };
</script>

<template>
    <header class="the-header">
        <the-header-top></the-header-top>
        <the-header-main></the-header-main>
        <the-header-mobile></the-header-mobile>
    </header>
</template>

<style lang="scss">
    .the-header {
        display: contents;
    }
</style>
