<script>
    import Swiper from "swiper/swiper-bundle.min";

    export default {
        name: "HomeReviews",
        props: {
            reviews: {
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
                this.slider = new Swiper(".js-reviews-slider", {
                    spaceBetween: 20,
                    slidesPerView: 1,
                    direction: "horizontal",
                    grabCursor: true,
                    mousewheel: {
                        forceToAxis: true,
                    },
                    pagination: {
                        el: ".swiper-pagination-reviews",
                        type: "progressbar",
                    },
                    breakpoints: {
                        991: {
                            spaceBetween: 10,
                            slidesPerView: 3,
                        },
                    },
                });
            });
        },
    };
</script>

<template>
    <section class="home-reviews">
        <h2 class="section-title">Отзывы клиентов</h2>
        <div class="home-reviews__slider">
            <div class="swiper-container js-reviews-slider">
                <div class="swiper-wrapper">
                    <div
                        v-for="(review, i) in reviews"
                        :key="i"
                        class="swiper-slide"
                    >
                        <about-reviews-card
                            :review="review"
                        ></about-reviews-card>
                    </div>
                </div>
            </div>
            <div
                v-if="reviews.length > 1"
                class="home-reviews__slider-pagination"
            >
                <div class="swiper-pagination-reviews"></div>
            </div>
        </div>
        <NuxtLink
            class="home-reviews__link base-button"
            :to="{ name: 'about', hash: '#reviews' }"
        >
            Все отзывы
        </NuxtLink>
    </section>
</template>

<style lang="scss">
    .home-reviews__slider {
        position: relative;
        .swiper-pagination-reviews {
            width: 100%;
            height: 2px;
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
    }

    .home-reviews__slider-pagination {
        padding-top: 15px;
    }

    .home-reviews__link {
        max-width: 190px;
        margin: 24px auto 0;
    }
</style>
