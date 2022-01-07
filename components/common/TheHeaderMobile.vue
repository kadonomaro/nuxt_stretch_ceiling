<script>
    import TheLogo from "~/components/common/TheLogo";
    import TheHeaderBurger from "~/components/common/TheHeaderBurger";
    import TheHeaderMobileMenu from "~/components/common/TheHeaderMobileMenu";

    export default {
        name: "TheHeaderMobile",
        components: {
            TheHeaderMobileMenu,
            TheHeaderBurger,
            TheLogo,
        },
        data() {
            return {
                isOpenedMenu: false,
            };
        },
        methods: {
            toggle(state) {
                this.isOpenedMenu = state;
                state
                    ? document.body.classList.add("no-scroll")
                    : document.body.classList.remove("no-scroll");
            },
            close() {
                this.isOpenedMenu = false;
                document.body.classList.remove("no-scroll");
            },
        },
    };
</script>

<template>
    <div class="the-header-mobile">
        <div class="container">
            <div class="the-header-mobile__inner">
                <div class="the-header-mobile__logo">
                    <the-logo></the-logo>
                </div>

                <div class="the-header-mobile__burger">
                    <the-header-burger
                        :initial-state="isOpenedMenu"
                        @click="toggle"
                    ></the-header-burger>
                </div>
            </div>
        </div>
        <div
            class="the-header-mobile__menu"
            :class="{ 'is-opened': isOpenedMenu }"
        >
            <the-header-mobile-menu @on-close="close"></the-header-mobile-menu>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-mobile {
        position: sticky;
        z-index: 100;
        top: 0;
        background-color: #fff;
        border-bottom: 1px solid $color-border;
        @include bp($bp-desktop-sm) {
            display: none;
        }
    }

    .the-header-mobile__inner {
        display: flex;
        align-items: center;
        height: 55px;
        padding: 8px 0;
    }

    .the-header-mobile__logo {
        margin-right: 12px;
    }

    .the-header-mobile__burger {
        margin-left: auto;
    }

    .the-header-mobile__menu {
        position: fixed;
        z-index: 900;
        top: 56px;
        left: 0;
        right: 0;
        height: calc(100vh - 56px);
        transform: translateX(-100%);
        transition: transform 0.3s ease-in;
        &.is-opened {
            transform: translateX(0);
        }
    }
</style>
