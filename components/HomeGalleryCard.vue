<script>
    export default {
        name: "HomeGalleryCard",
        props: {
            image: {
                type: Object,
                required: true,
            },
        },
        computed: {
            imageUrl() {
                const url = this.image.fields.image.fields.file.url;
                return {
                    mobile: {
                        jpg: url + "?w=600&fm=jpg&q=90",
                        webp: url + "?w=600&fm=webp&q=90",
                    },
                    desktop: {
                        jpg: url + "?w=800&fm=jpg&q=90",
                        webp: url + "?w=800&fm=webp&q=90",
                    },
                };
            },
        },
    };
</script>

<template>
    <div
        class="home-gallery-card"
        @click="$popup.show('ModalGallery', { imageUrl: imageUrl.detail })"
    >
        <div class="home-gallery-card__image">
            <picture>
                <source
                    media="(max-width: 600px)"
                    :srcset="imageUrl.mobile.webp"
                    type="image/webp"
                />
                <source
                    media="(max-width: 600px)"
                    :srcset="imageUrl.mobile.jpg"
                />
                <source :srcset="imageUrl.desktop.webp" type="image/webp" />
                <img
                    :src="imageUrl.desktop.jpg"
                    :alt="image.fields.title"
                    width="400"
                    height="300"
                />
            </picture>
            <div class="home-gallery-card__description">
                {{ image.fields.description }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-gallery-card {
        display: block;
        text-decoration: none;
        color: inherit;
        pointer-events: none;
        @include bp($bp-desktop-sm) {
            pointer-events: auto;
            cursor: pointer;
        }
    }

    .home-gallery-card__image {
        position: relative;
        padding-bottom: 100%;
        overflow: hidden;
        &:hover {
            .home-gallery-card__description {
                opacity: 1;
            }
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

    .home-gallery-card__description {
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        color: #fff;
        font-weight: 500;
        text-align: center;
        background-color: rgba(#000, 0.8);
        opacity: 0;
        transition: opacity 0.2s ease-in;
    }
</style>
