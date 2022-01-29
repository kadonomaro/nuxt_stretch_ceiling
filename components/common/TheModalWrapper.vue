<script>
    export default {
        name: "TheModalWrapper",
        props: {
            title: {
                type: String,
                default: "",
            },
        },
    };
</script>

<template>
    <div class="the-modal-wrapper">
        <div v-if="title" class="the-modal-wrapper__title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .the-modal-wrapper__title {
        margin-bottom: 24px;
        font-size: 24px;
        font-weight: 500;
    }
</style>
