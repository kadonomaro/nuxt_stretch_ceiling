<script>
    import Swiper from "swiper/swiper-bundle.min";
    import AboutReviewsCard from "~/components/AboutReviewsCard";

    export default {
        name: "HomeReviews",
        components: {
            AboutReviewsCard,
        },
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
                    slidesPerView: 1.2,
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
                class="swiper-pagination-reviews"
            ></div>
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
        margin: 0 -16px;
        @include bp($bp-desktop-sm) {
            margin: 0;
        }
        .swiper-pagination-reviews {
            width: calc(100% - 32px);
            height: 2px;
            margin: 0 16px;
            border-radius: 3px;
            overflow: hidden;
            background-color: $color-border;
            @include bp($bp-desktop-sm) {
                width: 100%;
                margin: 0;
            }
        }
        .swiper-slide {
            height: auto;
        }
        .swiper-container {
            padding-bottom: 15px;
        }
        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            background-color: $color-accent;
        }
    }

    .home-reviews__link {
        max-width: 190px;
        margin: 24px auto 0;
    }
</style>
