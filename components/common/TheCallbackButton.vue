<script>
    import TheSvgIcon from "~/components/common/TheSvgIcon";

    export default {
        name: "TheCallbackButton",
        components: { TheSvgIcon },
        props: {
            isOnlyText: Boolean,
        },
    };
</script>

<template>
    <button class="the-callback-button" @click="$popup.show('ModalCallback')">
        <span v-if="!isOnlyText" class="the-callback-button__icon">
            <the-svg-icon name="call"></the-svg-icon>
        </span>

        <span>Перезвоните мне</span>
    </button>
</template>

<style lang="scss">
    .the-callback-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $color-accent;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        &:hover {
            .the-callback-button__icon {
                transform: rotate(15deg);
            }
        }
        @include bp($bp-desktop-sm) {
            font-size: 16px;
        }
    }

    .the-callback-button__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin-right: 6px;
        background-color: $color-accent;
        border-radius: 50%;
        transition: transform 0.2s ease;
        svg {
            width: 16px;
            height: 16px;
        }
    }
</style>
