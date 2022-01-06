<script>
    import TheFooterTop from "~/components/common/TheFooterTop";
    import TheFooterBottom from "~/components/common/TheFooterBottom";

    export default {
        name: "TheFooter",
        components: { TheFooterTop, TheFooterBottom },
    };
</script>

<template>
    <footer class="the-footer">
        <div class="container">
            <the-footer-top></the-footer-top>
            <the-footer-bottom></the-footer-bottom>
        </div>
    </footer>
</template>

<style lang="scss">
    .the-footer {
        border-top: 1px solid $color-border;
    }
</style>
