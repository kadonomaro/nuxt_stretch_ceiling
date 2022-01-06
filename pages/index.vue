<script>
    import { createClient } from "~/plugins/contentful.js";
    import HomeWork from "~/components/HomeWork";

    const client = createClient();
    export default {
        name: "IndexPage",
        components: { HomeWork },
        asyncData() {
            return client
                .getEntries({
                    content_type: "ceiling_type",
                    order: "-sys.createdAt",
                })
                .then(({ items }) => {
                    return { catalog: items };
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
                <div class="container">
                    <home-catalog :catalog="catalog"></home-catalog>
                </div>
            </div>
            <div class="main-page__section">
                <div class="container">
                    <home-work></home-work>
                </div>
            </div>
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

    .main-page__section {
        margin-bottom: 36px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 72px;
        }
    }
</style>
