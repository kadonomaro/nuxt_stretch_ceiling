<script>
    export default {
        name: "BaseButton",
    };
</script>

<template>
    <button class="base-button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .base-button {
        padding: 16px 24px;
        color: #fff;
        background-color: $color-accent;
        transition: background-color 0.2s ease-in;
        &:hover {
            background-color: #40759e;
        }
    }
</style>
