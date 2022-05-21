<script>
    import HelpAdvice from "~/components/HelpAdvice";
    import HelpSafety from "~/components/HelpSafety";

    export default {
        name: "HelpPage",
        components: {
            HelpAdvice,
            HelpSafety,
        },
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
            <h1 class="page-title">Помощь</h1>

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
    .help-page__section {
        &:not(:last-child) {
            margin-bottom: 32px;
            @include bp($bp-desktop-sm) {
                margin-bottom: 64px;
            }
        }
    }
</style>
