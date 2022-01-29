<script>
    import TheLogo from "~/components/common/TheLogo";
    import TheCallbackButton from "~/components/common/TheCallbackButton";
    import TheSvgIcon from "~/components/common/TheSvgIcon";
    export default {
        name: "TheHeaderTop",
        components: { TheSvgIcon, TheCallbackButton, TheLogo },
    };
</script>

<template>
    <div class="the-header-top">
        <div class="container">
            <div class="the-header-top__inner">
                <div class="the-header-top__logo">
                    <the-logo></the-logo>
                </div>
                <div class="the-header-top__location">
                    <the-svg-icon name="location"></the-svg-icon>
                    <span>Республика Крым</span>
                </div>
                <a href="tel:79785860623" class="the-header-top__phone">
                    +7 (978) 586 06-23
                </a>
                <div class="the-header-top__callback">
                    <the-callback-button></the-callback-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-top {
        display: none;
        @include bp($bp-desktop-sm) {
            display: block;
            padding: 5px 0;
            background-color: #fff;
            border-bottom: 1px solid $color-border;
        }
    }

    .the-header-top__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .the-header-top__logo {
        @include bp($bp-desktop-sm) {
            margin-right: 24px;
        }
    }

    .the-header-top__location {
        display: none;
        @include bp($bp-desktop-sm) {
            display: flex;
            margin-right: auto;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
            svg {
                width: 16px;
                height: 16px;
                margin-right: 6px;
            }
        }
    }

    .the-header-top__phone {
        position: relative;
        color: $color-base;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        text-decoration: none;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 1px;
            background-color: currentColor;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        &:hover {
            &::before {
                opacity: 1;
            }
        }
        @include bp($bp-desktop-sm) {
            font-size: 16px;
        }
    }

    .the-header-top__callback {
        display: none;
        @include bp($bp-desktop-sm) {
            display: block;
            margin-left: 30px;
        }
    }
</style>
