<script>
    export default {
        name: "AboutReviews",
        props: {
            reviews: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<template>
    <section id="reviews" class="about-reviews">
        <h2 class="about-reviews__title section-title">Отзывы</h2>
        <div
            v-for="(review, i) in reviews"
            :key="i"
            class="about-reviews__card"
        >
            <about-reviews-card :review="review"></about-reviews-card>
        </div>
    </section>
</template>

<style lang="scss">
    .about-reviews__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .about-reviews__card {
        &:not(:last-child) {
            margin-bottom: 16px;
            @include bp($bp-desktop-sm) {
                margin-bottom: 32px;
            }
        }
    }
</style>
