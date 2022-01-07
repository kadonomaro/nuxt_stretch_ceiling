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
                return this.image.fields.image.fields.file.url;
            },
        },
    };
</script>

<template>
    <div class="home-gallery-card">
        <div class="home-gallery-card__image">
            <img :src="imageUrl" :alt="image.fields.title" />
            <div class="home-gallery-card__description">
                {{ image.fields.description }}
            </div>
        </div>
        <!--        <h3 class="home-gallery-card__title">{{ image.fields.title }}</h3>-->
    </div>
</template>

<style lang="scss">
    .home-gallery-card {
        display: block;
        text-decoration: none;
        color: inherit;
        &:hover {
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
