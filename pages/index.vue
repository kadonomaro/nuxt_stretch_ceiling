<script>
    import HomeCatalog from "~/components/HomeCatalog";
    import HomeWork from "~/components/HomeWork";
    import HomeGallery from "~/components/HomeGallery";
    import HomeReviews from "~/components/HomeReviews";
    import HomeAbout from "~/components/HomeAbout";

    export default {
        name: "IndexPage",
        components: {
            HomeCatalog,
            HomeWork,
            HomeGallery,
            HomeReviews,
            HomeAbout,
        },
        data() {
            return {
                catalog: null,
                gallery: null,
                reviews: null,
                about: null,
            };
        },
        async fetch() {
            await Promise.all([
                this.$api.getEntries({
                    content_type: "ceiling_type",
                    order: "-sys.createdAt",
                }),
                this.$api.getEntries({
                    content_type: "gallery",
                    order: "-sys.createdAt",
                }),
                this.$api.getEntries({
                    content_type: "reviews",
                    order: "-fields.date",
                    limit: 5,
                }),
                this.$api.getEntries({
                    content_type: "about",
                    order: "-sys.createdAt",
                }),
            ]).then(([catalog, gallery, reviews, about]) => {
                this.catalog = catalog.items;
                this.gallery = gallery.items.sort((a, b) => {
                    return a.fields.sort - b.fields.sort;
                });
                this.reviews = reviews.items;
                this.about = about.items[0];
            });
        },
        head() {
            return {
                title: "Натяжные потолки",
            };
        },
    };
</script>

<template>
    <div class="main-page page">
        <div class="container">
            <h1 class="page-title">Натяжные потолки в Москве</h1>

            <div v-if="catalog" class="main-page__section">
                <home-catalog :catalog="catalog"></home-catalog>
            </div>

            <div class="main-page__section">
                <home-work></home-work>
            </div>

            <div v-if="gallery" class="main-page__section">
                <home-gallery :gallery="gallery"></home-gallery>
            </div>

            <div v-if="reviews" class="main-page__section">
                <home-reviews :reviews="reviews"></home-reviews>
            </div>

            <div v-if="about" class="main-page__section">
                <home-about :about="about"></home-about>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .main-page__section {
        &:not(:last-child) {
            margin-bottom: 32px;
            @include bp($bp-desktop-sm) {
                margin-bottom: 64px;
            }
        }
    }
</style>
