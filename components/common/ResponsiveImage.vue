<script>
    export default {
        name: "ResponsiveImage",
        props: {
            image: {
                type: Object,
                default: () => {},
            },
            alt: {
                type: String,
                default: "",
            },
            width: {
                type: String,
                default: "",
            },
            height: {
                type: String,
                default: "",
            },
        },
    };
</script>

<template>
    <picture>
        <source
            media="(max-width: 600px)"
            :srcset="image.mobile.webp"
            type="image/webp"
        />
        <source media="(max-width: 600px)" :srcset="image.mobile.jpg" />
        <source :srcset="image.desktop.webp" type="image/webp" />
        <img
            :src="image.desktop.jpg"
            :alt="alt"
            :width="width"
            :height="height"
        />
    </picture>
</template>
