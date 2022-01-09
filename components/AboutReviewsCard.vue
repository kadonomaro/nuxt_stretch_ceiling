<script>
    export default {
        name: "AboutReviewsCard",
        filters: {
            date(date) {
                return new Date(date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                });
            },
        },
        props: {
            review: {
                type: Object,
                default: () => {},
            },
        },
    };
</script>

<template>
    <article class="about-reviews-card box-shadow">
        <h3 class="about-reviews-card__author">{{ review.fields.author }}</h3>
        <div class="about-reviews-card__text">
            {{ review.fields.description }}
        </div>
        <span class="about-reviews-card__date">
            {{ review.fields.date | date }}
        </span>
    </article>
</template>

<style lang="scss">
    .about-reviews-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 16px;
        background-color: #fff;
        @include bp($bp-desktop-sm) {
            padding: 24px;
        }
    }

    .about-reviews-card__author {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 600;
        @include bp($bp-desktop-sm) {
            margin-bottom: 12px;
        }
    }

    .about-reviews-card__text {
        margin-bottom: 8px;
        color: $color-light;
        font-size: 14px;
        line-height: 24px;
    }

    .about-reviews-card__date {
        margin-top: auto;
        font-size: 12px;
    }
</style>
