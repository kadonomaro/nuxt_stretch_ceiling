<script>
    export default {
        name: "HomeGallery",
        props: {
            gallery: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<template>
    <section id="gallery" class="home-gallery">
        <h2 class="home-gallery__title section-title">
            Натяжные потолки в интерьере
        </h2>
        <div class="home-gallery__list">
            <div
                v-for="(image, i) in gallery"
                :key="i"
                class="home-gallery__card"
            >
                <home-gallery-card :image="image"></home-gallery-card>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-gallery__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .home-gallery__list {
        @include bp($bp-desktop-sm) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 15px;
            grid-auto-rows: auto;
            grid-auto-flow: dense;
        }
    }

    .home-gallery__card {
        margin-bottom: 10px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 0;
            &:first-child,
            &:nth-child(8) {
                grid-column-end: span 2;
                grid-row-end: span 2;
            }
        }
    }
</style>
