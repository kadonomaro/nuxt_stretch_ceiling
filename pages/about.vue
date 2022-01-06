<script>
    export default {
        name: "AboutPage",
    };
</script>

<template>
    <div class="about-page page">
        <div class="container">
            <h1 class="about-page__title page-title">О компании</h1>
        </div>
    </div>
</template>

<style lang="scss">
    .about-page__title {
        margin-bottom: 20px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 40px;
        }
    }
</style>
