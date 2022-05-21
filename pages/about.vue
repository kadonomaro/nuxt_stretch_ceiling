<script>
    import AboutContacts from "~/components/AboutContacts";
    import AboutReviews from "~/components/AboutReviews";

    export default {
        name: "AboutPage",
        components: {
            AboutContacts,
            AboutReviews,
        },
        data() {
            return {
                reviews: null,
            };
        },
        async fetch() {
            await this.$api
                .getEntries({
                    content_type: "reviews",
                    order: "-fields.date",
                })
                .then(({ items }) => {
                    this.reviews = items;
                });
        },
        head() {
            return {
                title: "О компании",
            };
        },
    };
</script>

<template>
    <div class="about-page page">
        <div class="container">
            <h1 class="page-title">О компании</h1>
            <div class="about-page__contacts">
                <about-contacts></about-contacts>
            </div>
            <div class="about-page__reviews">
                <about-reviews :reviews="reviews"></about-reviews>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .about-page__contacts {
        margin-bottom: 32px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 64px;
        }
    }
</style>
