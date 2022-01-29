<script>
    export default {
        name: "ModalGallery",
        props: {
            imageUrl: {
                type: String,
                default: "",
            },
        },
    };
</script>

<template>
    <div class="modal-gallery">
        <div class="modal-gallery__image">
            <img :src="imageUrl" alt="Галерея натяжных потолков" />
        </div>
    </div>
</template>

<style lang="scss">
    .modal-gallery__image {
        position: relative;
        padding-bottom: 75%;
        overflow: hidden;
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
