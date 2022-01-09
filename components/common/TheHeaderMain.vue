<script>
    import TheTopNavigation from "~/components/common/TheTopNavigation";
    export default {
        name: "TheHeaderMain",
        components: { TheTopNavigation },
    };
</script>

<template>
    <div class="the-header-main">
        <div class="container">
            <div class="the-header-main__inner">
                <div class="the-header-main__menu">
                    <the-top-navigation></the-top-navigation>
                </div>
                <button
                    class="the-header-main__button"
                    @click="$popup.show('ModalCalc')"
                >
                    <img src="/images/home/ruler.svg" alt="" />
                    Бесплатный замер
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-main {
        display: none;
        @include bp($bp-desktop-sm) {
            position: sticky;
            z-index: 100;
            top: 0;
            display: block;
            background-color: #fff;
            border-bottom: 1px solid $color-border;
        }
    }

    .the-header-main__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .the-header-main__button {
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        transition: color 0.2s ease-in;
        &:hover {
            color: $color-accent;
        }
        img {
            width: 24px;
            height: 24px;
            margin-right: 6px;
        }
    }
</style>
