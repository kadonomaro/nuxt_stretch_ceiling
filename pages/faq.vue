<script>
    export default {
        name: "HelpPage",
    };
</script>

<template>
    <div class="faq-page page">
        <div class="container">
            <h1 class="faq-page__title page-title">
                Ответы на самые популярные вопросы
            </h1>
        </div>
    </div>
</template>

<style lang="scss">
    .faq-page__title {
        margin-bottom: 20px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 40px;
        }
    }
</style>
