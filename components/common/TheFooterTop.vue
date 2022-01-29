<script>
    import { menu } from "~/settings";
    import TheFooterNavigation from "~/components/common/TheFooterNavigation";
    import TheCallbackButton from "~/components/common/TheCallbackButton";
    import TheSocialLinks from "~/components/common/TheSocialLinks";

    export default {
        name: "TheFooterTop",
        components: { TheSocialLinks, TheCallbackButton, TheFooterNavigation },
        menu() {
            return menu;
        },
    };
</script>

<template>
    <div class="the-footer-top">
        <div class="the-footer-top__main">
            <div
                v-for="(menu, i) in $options.menu()"
                :key="i"
                class="the-footer-top__col"
            >
                <the-footer-navigation :menu="menu"></the-footer-navigation>
            </div>
        </div>
        <div class="the-footer-top__side">
            <div class="the-footer-top__title">Наши контакты</div>
            <div class="the-footer-top__social">
                <the-social-links></the-social-links>
            </div>
            <div class="the-footer-top__title">График работы</div>
            <div class="the-footer-top__work">Пн-Вс с 8:00 до 20:00</div>
            <div class="the-footer-top__callback">
                <the-callback-button></the-callback-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-footer-top {
        padding: 16px 0;
        @include bp($bp-desktop-sm) {
            display: flex;
            padding: 32px 0;
        }
    }

    .the-footer-top__main {
        @include bp($bp-desktop-sm) {
            display: flex;
            flex-basis: 75%;
            flex-grow: 1;
        }
    }

    .the-footer-top__side {
        @include bp($bp-desktop-sm) {
            flex-basis: 25%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }

    .the-footer-top__callback {
        margin-left: auto;
    }

    .the-footer-top__col {
        margin-bottom: 24px;
        @include bp($bp-desktop-sm) {
            flex-basis: calc(100% / 3);
            max-width: calc(100% / 3);
            margin-bottom: 0;
        }
    }

    .the-footer-top__title {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 500;
        @include bp($bp-desktop-sm) {
            margin-bottom: 12px;
        }
    }

    .the-footer-top__social {
        margin-bottom: 24px;
    }

    .the-footer-top__work {
        margin-bottom: 24px;
        color: $color-light;
        font-size: 14px;
    }
</style>
