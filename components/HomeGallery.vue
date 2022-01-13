<script>
    import Swiper from "swiper/swiper-bundle.min";

    export default {
        name: "HomeGallery",
        props: {
            gallery: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                slider: null,
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.slider = new Swiper(".js-gallery-slider", {
                    spaceBetween: 20,
                    slidesPerView: 1.2,
                    direction: "horizontal",
                    grabCursor: true,
                    mousewheel: {
                        forceToAxis: true,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                });
            });
        },
    };
</script>

<template>
    <section id="gallery" class="home-gallery">
        <h2 class="section-title">Натяжные потолки в интерьере</h2>
        <div class="home-gallery__list">
            <div
                v-for="(image, i) in gallery"
                :key="i"
                class="home-gallery__card"
            >
                <home-gallery-card :image="image"></home-gallery-card>
            </div>
        </div>

        <div class="home-gallery__slider">
            <div class="swiper-container js-gallery-slider">
                <div class="swiper-wrapper">
                    <div
                        v-for="(image, i) in gallery"
                        :key="i"
                        class="swiper-slide"
                    >
                        <home-gallery-card :image="image"></home-gallery-card>
                    </div>
                </div>
            </div>
            <div
                v-if="gallery.length > 1"
                class="home-gallery__slider-pagination"
            >
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-gallery__list {
        display: none;
        @include bp($bp-desktop-sm) {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 12px;
            grid-auto-rows: auto;
            grid-auto-flow: dense;
        }
    }

    .home-gallery__slider {
        position: relative;
        margin: 0 -16px;
        .swiper-pagination {
            width: calc(100% - 32px);
            height: 2px;
            margin: 0 16px;
            border-radius: 3px;
            overflow: hidden;
            background-color: $color-border;
        }
        .swiper-slide {
            height: auto;
        }
        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            background-color: $color-accent;
        }
        @include bp($bp-desktop-sm) {
            display: none;
        }
    }

    .home-gallery__card {
        margin-bottom: 10px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 0;
            &:first-child,
            &:nth-child(11) {
                grid-column-end: span 2;
                grid-row-end: span 2;
            }
        }
    }

    .home-gallery__slider-pagination {
        padding-top: 15px;
    }
</style>
