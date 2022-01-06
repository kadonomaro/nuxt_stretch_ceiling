<script>
    export default {
        name: "HomeCatalogCard",
        props: {
            card: {
                type: Object,
                required: true,
            },
        },
        computed: {
            imageUrl() {
                return this.card.fields.image.fields.file.url;
            },
        },
    };
</script>

<template>
    <NuxtLink class="home-catalog-card" to="/">
        <div class="home-catalog-card__image">
            <img :src="imageUrl" :alt="card.fields.title" />
        </div>
        <h3 class="home-catalog-card__title">{{ card.fields.title }}</h3>
    </NuxtLink>
</template>

<style lang="scss">
    .home-catalog-card {
        display: block;
        text-decoration: none;
        color: inherit;
        &:hover {
            .home-catalog-card__image img {
                transform: scale(1.03);
            }
            .home-catalog-card__title {
                color: $color-accent;
            }
        }
    }

    .home-catalog-card__title {
        font-size: 14px;
        font-weight: 500;
        transition: color 0.2s ease-in;
        @include bp($bp-desktop-sm) {
            font-size: 16px;
        }
    }

    .home-catalog-card__image {
        position: relative;
        margin-bottom: 8px;
        padding-bottom: 75%;
        overflow: hidden;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: transform 0.2s ease-in;
            will-change: transform;
        }
    }
</style>
