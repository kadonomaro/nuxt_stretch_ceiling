<script>
    export default {
        name: "BaseButton",
        props: {
            isLoading: Boolean,
        },
    };
</script>

<template>
    <button
        class="base-button"
        :class="{ 'is-loading': isLoading }"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .base-button {
        position: relative;
        display: block;
        padding: 16px 24px;
        color: #fff;
        text-decoration: none;
        text-align: center;
        background-color: $color-accent;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
        &.is-loading {
            color: transparent;
            pointer-events: none;
        }
        &:hover:not(.is-loading) {
            background-color: #40759e;
        }
    }
</style>
