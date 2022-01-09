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
        <img :src="imageUrl" alt="Галерея натяжных потолков" />
    </div>
</template>

<style lang="scss">
    .modal-gallery {
        img {
            width: 100%;
        }
    }
</style>
