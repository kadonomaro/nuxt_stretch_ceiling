<script>
    import { createClient } from "~/plugins/contentful.js";
    import HomeWork from "~/components/HomeWork";

    const client = createClient();
    export default {
        name: "IndexPage",
        components: { HomeWork },
        asyncData() {
            return Promise.all([
                client.getEntries({
                    content_type: "ceiling_type",
                    order: "-sys.createdAt",
                }),
                client.getEntries({
                    content_type: "gallery",
                    order: "-sys.createdAt",
                }),
            ]).then((response) => {
                return {
                    catalog: response[0].items,
                    gallery: response[1].items,
                };
            });
        },
    };
</script>

<template>
    <div class="main-page page">
        <div class="container">
            <h1 class="main-page__title page-title">
                Натяжные потолки в Крыму
            </h1>

            <div class="main-page__section">
                <home-catalog :catalog="catalog"></home-catalog>
            </div>

            <div class="main-page__section">
                <home-work></home-work>
            </div>

            <div class="main-page__section">
                <home-gallery :gallery="gallery"></home-gallery>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .main-page__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .main-page__section {
        margin-bottom: 32px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 64px;
        }
    }
</style>
