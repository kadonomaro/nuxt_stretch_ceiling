<script>
    export default {
        name: "ContactsPage",
    };
</script>

<template>
    <div class="contacts-page">
        <div class="container">
            <h1 class="contacts-page__title page-title">Контакты</h1>
        </div>
    </div>
</template>

<style lang="scss">
    .contacts-page {
        padding-top: 20px;
        @include bp($bp-desktop-sm) {
            padding-top: 40px;
        }
    }

    .contacts-page__title {
        margin-bottom: 20px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 40px;
        }
    }
</style>
