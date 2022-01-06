<script>
    export default {
        name: "TransitionContainer",
        props: {
            show: Boolean,
        },
        methods: {
            startTransition(el) {
                el.style.height = el.scrollHeight + "px";
            },
            endTransition(el) {
                el.style.height = "";
            },
        },
    };
</script>

<template>
    <transition
        name="slide-down"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition"
    >
        <div v-show="show" class="transition-container">
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .transition-container {
        --transition-duration--slide-down: 0.2s;
    }
</style>
