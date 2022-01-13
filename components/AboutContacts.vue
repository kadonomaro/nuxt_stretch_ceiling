<script>
    export default {
        name: "AboutContacts",
    };
</script>

<template>
    <section id="contacts" class="about-contacts">
        <h2 class="section-title">Контакты</h2>
        <div class="about-contacts__inner box-shadow">
            <div class="about-contacts__text"></div>
            <div class="about-contacts__map"></div>
        </div>
    </section>
</template>

<style lang="scss">
    .about-contacts {
    }

    .about-contacts__text {
        padding: 16px;
        @include bp($bp-desktop-sm) {
            padding: 24px;
        }
    }
</style>
