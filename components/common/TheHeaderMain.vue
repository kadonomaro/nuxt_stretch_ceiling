<script>
    import TheTopNavigation from "~/components/common/TheTopNavigation";
    export default {
        name: "TheHeaderMain",
        components: { TheTopNavigation },
    };
</script>

<template>
    <div class="the-header-main">
        <div class="container">
            <div class="the-header-main__menu">
                <the-top-navigation></the-top-navigation>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-main {
    }
</style>
