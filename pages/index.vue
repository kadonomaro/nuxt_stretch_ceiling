<script>
    export default {
        name: "IndexPage",
    };
</script>

<template>
    <div class="main-page page">
        <div class="container">
            <h1 class="main-page__title page-title">Виды натяжных потолков</h1>
        </div>
    </div>
</template>

<style lang="scss">
    .main-page__title {
        margin-bottom: 20px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 40px;
        }
    }
</style>
