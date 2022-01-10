<script>
    import TheSvgIcon from "~/components/common/TheSvgIcon";

    export default {
        name: "TheModal",
        components: {
            TheSvgIcon,
        },
        data() {
            return {
                opened: false,
                name: null,
                props: null,
                isModalGallery: false,
            };
        },
        mounted() {
            this.$eventBus.$on("popup-show", this.show);
            this.$eventBus.$on("popup-close", this.close);
            window.addEventListener("popstate", () => this.close());
        },
        beforeDestroy() {
            this.$eventBus.$off("popup-show", this.show);
            this.$eventBus.$off("popup-close", this.close);
        },
        methods: {
            show({ nameOrComponent, props }) {
                this.name = nameOrComponent;
                this.props = props;
                this.opened = true;

                window.addEventListener("keyup", this.onEscapeKeyUp);
                document.body.classList.add("no-scroll");

                if (nameOrComponent === "ModalGallery") {
                    this.isModalGallery = true;
                }
            },
            close() {
                this.opened = false;
                window.removeEventListener("keyup", this.onEscapeKeyUp);
                document.body.classList.remove("no-scroll");
                this.isModalGallery = false;
            },
            onEscapeKeyUp(event) {
                if (event.which === 27) {
                    this.close();
                }
            },
            onMouseDown({ target }) {
                if (target === this.$refs.popupContainer) {
                    this.close();
                }
            },
        },
    };
</script>

<template>
    <transition name="fade">
        <div v-if="opened" class="base-popup-overlay">
            <div
                ref="popupContainer"
                class="base-popup-container"
                @mousedown="onMouseDown"
            >
                <div
                    class="base-popup"
                    :class="{
                        'base-popup--gallery': isModalGallery,
                    }"
                >
                    <button class="base-popup__close" @click="close()">
                        <the-svg-icon name="close"></the-svg-icon>
                    </button>
                    <div class="base-popup__content">
                        <div :is="name" v-bind="props"></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .base-popup-overlay {
        --transition-duration: 0.25s;
        position: fixed;
        z-index: 2101;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(#000000, 0.7);
    }

    .base-popup-container {
        width: 100%;
        height: 100%;
        outline: none;
        overflow-y: auto;
        box-sizing: border-box;
        @include bp($bp-desktop-sm) {
            padding: 10px;
        }
    }

    .base-popup {
        position: relative;
        z-index: 20;
        height: 100%;
        padding: 32px;
        background-color: #fff;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        @include bp($bp-desktop-sm) {
            max-width: 450px;
            margin: 30px auto 10px;
            height: auto;
        }
    }

    .base-popup--gallery {
        max-width: 900px;
        .base-popup__close {
            top: -25px;
            right: -25px;
            filter: brightness(0) invert(100%);
        }
    }

    .base-popup__close {
        position: absolute;
        z-index: 1000;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        &:after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: -4px;
        }
        svg {
            display: block;
            width: 20px;
            height: 20px;
        }
    }
</style>
