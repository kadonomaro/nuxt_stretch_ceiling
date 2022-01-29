<script>
    import ResponsiveImage from "~/components/common/ResponsiveImage";
    export default {
        name: "HomeGalleryCard",
        components: { ResponsiveImage },
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
                    detail: url,
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
            <responsive-image
                :image="imageUrl"
                :alt="image.fields.title"
                width="400"
                height="400"
            ></responsive-image>
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
            img {
                transform: scale(1.03);
            }
        }
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.2s ease-in;
            will-change: transform;
        }
    }
</style>
