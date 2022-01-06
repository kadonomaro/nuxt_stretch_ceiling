<script>
    import TheLogo from "~/components/common/TheLogo";
    export default {
        name: "TheHeaderTop",
        components: { TheLogo },
    };
</script>

<template>
    <div class="the-header-top">
        <div class="the-header-top__logo">
            <div class="container">
                <the-logo></the-logo>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-top {
        @include bp($bp-desktop-sm) {
            padding: 30px 0;
            border-bottom: 1px solid #eee;
        }
    }
</style>
