<script>
    import ResponsiveImage from "~/components/common/ResponsiveImage";

    export default {
        name: "HomeCatalogCard",
        components: { ResponsiveImage },
        props: {
            card: {
                type: Object,
                required: true,
            },
        },
        computed: {
            imageUrl() {
                const url = this.card.fields.image.fields.file.url;
                return {
                    mobile: {
                        jpg: url + "?w=350&fm=jpg&q=90",
                        webp: url + "?w=350&fm=webp&q=90",
                    },
                    desktop: {
                        jpg: url + "?w=600&fm=jpg&q=90",
                        webp: url + "?w=600&fm=webp&q=90",
                    },
                };
            },
        },
    };
</script>

<template>
    <NuxtLink
        class="home-catalog-card"
        :to="{
            name: 'catalog-slug',
            params: { catalog: 'catalog', slug: card.fields.slug },
        }"
    >
        <div class="home-catalog-card__image">
            <responsive-image
                :image="imageUrl"
                :alt="card.fields.title"
                width="400"
                height="400"
            ></responsive-image>
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
            .home-catalog-card__image {
                transform: translate(-4px, -4px);
                &::before {
                    opacity: 1;
                    transform: translate(8px, 8px);
                }
            }
        }
    }

    .home-catalog-card__title {
        font-size: 14px;
        font-weight: 500;
        @include bp($bp-desktop-sm) {
            font-size: 16px;
        }
    }

    .home-catalog-card__image {
        position: relative;
        margin-bottom: 10px;
        padding-bottom: 75%;
        transition: transform 0.2s ease-in;
        will-change: transform;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 2px solid $color-accent;
            opacity: 0;
            transition: opacity 0.2s ease-in, transform 0.2s ease-in;
            will-change: transform;
        }
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>
