<script>
    export default {
        name: "TheSvgIcon",
        props: {
            name: {
                type: String,
                required: true,
            },
        },
        computed: {
            getIconUrl() {
                return require(`@/assets/sprites.svg`) + `#${this.name}`;
            },
        },
    };
</script>

<template>
    <svg :class="[`icon-${name}`]" xmlns="http://www.w3.org/2000/svg">
        <use
            :xlink:href="getIconUrl"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        ></use>
    </svg>
</template>
