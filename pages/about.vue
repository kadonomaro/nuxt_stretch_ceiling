<script>
    import { createClient } from "~/plugins/contentful.js";

    const client = createClient();

    export default {
        name: "AboutPage",
        asyncData() {
            return client
                .getEntries({
                    content_type: "reviews",
                    order: "-fields.date",
                })
                .then(({ items }) => {
                    return {
                        reviews: items,
                    };
                });
        },
    };
</script>

<template>
    <div class="about-page page">
        <div class="container">
            <h1 class="about-page__title page-title">О компании</h1>
            <div class="about-page__reviews">
                <about-reviews :reviews="reviews"></about-reviews>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .about-page__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }
</style>
