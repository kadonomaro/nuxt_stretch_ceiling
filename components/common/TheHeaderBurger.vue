<script>
    export default {
        name: "TheHeaderBurger",
        props: {
            initialState: Boolean,
        },
        data() {
            return {
                isOpen: this.initialState,
            };
        },
        watch: {
            initialState(state) {
                this.isOpen = state;
            },
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
                this.$emit("click", this.isOpen);
            },
        },
    };
</script>

<template>
    <button
        class="the-header-burger"
        :class="{ 'is-active': isOpen }"
        @click="toggle"
    >
        <span v-for="line in 3" :key="line"></span>
    </button>
</template>

<style lang="scss">
    .the-header-burger {
        position: relative;
        z-index: 1000;
        display: block;
        width: 24px;
        height: 16px;
        -webkit-tap-highlight-color: transparent;
        &::before {
            content: "";
            position: absolute;
            top: -5px;
            bottom: -5px;
            left: -5px;
            right: -5px;
        }
        &.is-active {
            span {
                &:first-child {
                    transform: translateY(8px) rotate(45deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:last-child {
                    transform: translateY(-8px) rotate(-45deg);
                }
            }
        }
        span {
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            background-color: $color-base;
            transform-origin: center;
            transition: transform 0.2s ease-in, opacity 0.2s ease-in;
            &:first-child {
                top: 0;
            }
            &:nth-child(2) {
                top: 50%;
            }
            &:last-child {
                top: 100%;
            }
        }
    }
</style>
