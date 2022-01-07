<script>
    import TheSvgIcon from "~/components/common/TheSvgIcon";
    import TransitionContainer from "~/components/common/TransitionContainer";

    export default {
        name: "TheAccordion",
        components: {
            TransitionContainer,
            TheSvgIcon,
        },
        props: {
            accordion: Object,
            index: [Number, String],
            activeIndex: [Number, String],
        },
        data() {
            return {
                isShow: false,
            };
        },
        methods: {
            showDropdown() {
                if (this.index === this.activeIndex) {
                    this.$emit("change", 999);
                } else {
                    this.isShow = !this.isShow;
                }
            },
        },
    };
</script>

<template>
    <div ref="jsAccordion" class="b-accordion">
        <button class="b-accordion__title" @click="showDropdown">
            <span class="b-accordion__title-text">
                {{ accordion.fields.title }}
            </span>

            <span
                class="b-accordion__title-arrow"
                :class="{
                    'b-accordion__title-arrow--rotate':
                        activeIndex === index || isShow,
                }"
            >
                <the-svg-icon name="arrow"></the-svg-icon>
            </span>
        </button>
        <transition-container :show="activeIndex === index || isShow">
            <div class="b-accordion__desc">
                {{ accordion.fields.description }}
            </div>
        </transition-container>
    </div>
</template>

<style lang="scss">
    .b-accordion {
        padding: 16px 0;
        margin-top: -1px;
        &:not(:first-child) {
            border-color: $color-border;
            border-width: 1px 0 0 0;
            border-style: solid;
        }
        &:not(:last-child) {
            border-color: $color-border;
            border-width: 0 0 1px 0;
            border-style: solid;
        }
    }

    .b-accordion__title {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-right: 40px;
        text-align: left;
        cursor: pointer;
    }

    .b-accordion__title-text {
        color: $color-base;
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        text-align: left;
        @include bp($bp-desktop-sm) {
            letter-spacing: 0.005em;
        }
    }

    .b-accordion__title-arrow {
        position: absolute;
        right: 0;
        top: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: $color-accent;
        flex-shrink: 0;
        transform: translateY(-50%);
        transition: background-color 0.2s ease-in;
        svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            fill: $color-accent;
            transform: rotate(-90deg);
            transition: transform 0.2s ease-in;
        }
    }

    .b-accordion__title-arrow--rotate {
        color: #fff;
        background-color: $color-accent;
        svg {
            transform: rotate(90deg);
            fill: #fff;
        }
    }

    .b-accordion__desc {
        padding-top: 16px;
        color: $color-light;
        font-size: 14px;
        line-height: 24px;
        a {
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>
