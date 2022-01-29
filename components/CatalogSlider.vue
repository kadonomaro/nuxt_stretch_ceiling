<script>
    import Swiper from "swiper/swiper-bundle.min";
    import TheSvgIcon from "~/components/common/TheSvgIcon";

    export default {
        name: "CatalogSlider",
        components: {
            TheSvgIcon,
        },
        props: {
            gallery: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                slider: null,
                sliderThumbs: null,
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.sliderThumbs = new Swiper(".js-gallery-thumbs", {
                    spaceBetween: 4,
                    slidesPerView: "auto",
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    direction: "horizontal",
                    grabCursor: true,
                    lazy: {
                        preloaderClass: "swiper-preloader",
                    },
                    breakpoints: {
                        991: {
                            spaceBetween: 10,
                            direction: "vertical",
                            slidesPerView: 5,
                            freeMode: false,
                        },
                        1366: {
                            spaceBetween: 10,
                            direction: "vertical",
                            slidesPerView: 6,
                            freeMode: false,
                        },
                    },
                });

                this.slider = new Swiper(".js-gallery-slider", {
                    observer: true,
                    lazy: {
                        preloaderClass: "swiper-preloader",
                        loadPrevNext: true,
                    },
                    thumbs: {
                        swiper: this.sliderThumbs,
                    },
                    navigation: {
                        nextEl: `.js-gallery-thumbs-next`,
                        prevEl: `.js-gallery-thumbs-prev`,
                    },
                    breakpoints: {
                        991: {
                            scrollbar: {
                                el: null,
                            },
                            keyboard: {
                                enabled: true,
                                onlyInViewport: false,
                            },
                        },
                    },
                });
            });
        },
    };
</script>

<template>
    <div class="catalog-slider">
        <div class="catalog-slider__main">
            <div class="swiper-container js-gallery-slider">
                <div class="swiper-wrapper">
                    <div
                        v-for="(image, i) in gallery"
                        :key="i"
                        class="swiper-slide"
                    >
                        <div class="catalog-slider__slide">
                            <picture>
                                <source
                                    :data-srcset="
                                        image.fields.file.url +
                                        '?w=900&fm=webp&q=90'
                                    "
                                    type="image/webp"
                                />
                                <img
                                    class="swiper-lazy"
                                    :data-src="
                                        image.fields.file.url +
                                        '?w=900&fm=jpg&q=90'
                                    "
                                    :alt="image.fields.description"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="catalog-slider__thumbs">
            <div
                class="catalog-slider__arrow catalog-slider__arrow--prev js-gallery-thumbs-prev"
            >
                <the-svg-icon name="arrow"></the-svg-icon>
            </div>
            <div
                class="swiper-container catalog-slider__thumbs-slider js-gallery-thumbs"
            >
                <div class="swiper-wrapper">
                    <div
                        v-for="(image, i) in gallery"
                        :key="i"
                        class="swiper-slide catalog-slider__thumbs-item"
                    >
                        <picture>
                            <source
                                :data-srcset="
                                    image.fields.file.url +
                                    '?w=120&fm=webp&q=90'
                                "
                                type="image/webp"
                            />
                            <img
                                class="swiper-lazy"
                                :data-src="
                                    image.fields.file.url + '?w=120&fm=jpg&q=90'
                                "
                                :alt="image.fields.description"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div
                class="catalog-slider__arrow catalog-slider__arrow--next js-gallery-thumbs-next"
                tabindex="-1"
            >
                <the-svg-icon name="arrow"></the-svg-icon>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .catalog-slider {
        @include bp($bp-desktop-sm) {
            position: relative;
            display: flex;
        }
    }

    .catalog-slider__thumbs {
        @include bp($bp-desktop-sm) {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            display: block;
            width: 80px;
            height: 100%;
        }
    }

    .catalog-slider__thumbs-slider {
        @include bp($bp-desktop-sm) {
            height: 620px;
            max-height: 100%;
        }
    }

    .catalog-slider__thumbs-item {
        position: relative;
        border: 2px solid transparent;
        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            object-fit: cover;
        }
        &.swiper-slide {
            width: 40px;
            height: 40px;
            @include bp($bp-desktop-sm) {
                width: 80px !important;
                height: 80px !important;
            }
        }
        &.swiper-slide-thumb-active {
            border-color: $color-accent;
        }
        &:not(.swiper-slide-thumb-active) {
            cursor: pointer;
        }
    }

    .catalog-slider__main {
        margin-bottom: 12px;
        @include bp($bp-desktop-sm) {
            width: calc(100% - 100px);
            margin-bottom: 0;
            margin-left: auto;
        }
    }

    .catalog-slider__slide {
        position: relative;
        padding-bottom: 100%;
        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            object-fit: cover;
        }
    }

    .catalog-slider__arrow {
        display: none;
        @include bp($bp-desktop-sm) {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            cursor: pointer;
            &[aria-disabled="true"] {
                opacity: 0;
            }
            svg {
                width: 28px;
                height: 28px;
                fill: $color-accent;
            }
        }
    }

    .catalog-slider__arrow--prev {
        top: -40px;
        left: 50%;
        transform: translateX(-50%) rotate(90deg);
    }

    .catalog-slider__arrow--next {
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%) rotate(-90deg);
    }
</style>
