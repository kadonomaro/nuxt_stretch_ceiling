<script>
    export default {
        name: "HelpPage",
    };
</script>

<template>
    <div class="help-page page">
        <div class="container">
            <h1 class="help-page__title page-title">Помощь</h1>
        </div>
    </div>
</template>

<style lang="scss">
    .help-page__title {
        margin-bottom: 20px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 40px;
        }
    }
</style>
