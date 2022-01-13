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
