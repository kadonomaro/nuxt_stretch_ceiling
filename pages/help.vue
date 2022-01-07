<script>
    export default {
        name: "HelpPage",
        head() {
            return {
                title: "Советы по выбору натяжных потолков",
            };
        },
    };
</script>

<template>
    <div class="help-page page">
        <div class="container">
            <h1 class="help-page__title page-title">Помощь</h1>

            <div class="help-page__section">
                <help-advice></help-advice>
            </div>

            <div class="help-page__section">
                <help-safety></help-safety>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .help-page__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .help-page__section {
        margin-bottom: 32px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 64px;
        }
    }
</style>
