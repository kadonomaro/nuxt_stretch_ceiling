<script>
    export default {
        name: "ThePreloader",
        props: {
            show: Boolean,
        },
    };
</script>

<template>
    <div v-if="show" class="the-preloader">
        <div class="the-preloader__inner">
            <div class="the-preloader__item"></div>
            <div class="the-preloader__item"></div>
            <div class="the-preloader__item"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-preloader {
        --preloader-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .the-preloader__inner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .the-preloader__item {
        width: var(--preloader-size);
        height: var(--preloader-size);
        border: 2px solid #fff;
        &:first-child {
            background-color: #7696af;
            transform: translateX(100%);
            animation: preloaderLeft 1.4s ease-in forwards infinite;
        }
        &:nth-child(2) {
            background-color: #40759e;
            animation: preloaderCenter 1.4s ease-in forwards infinite;
        }
        &:last-child {
            background-color: #00477e;
            transform: translateX(-100%);
            animation: preloaderRight 1.4s ease-in forwards infinite;
        }
    }

    @keyframes preloaderLeft {
        33%,
        50% {
            transform: translateX(50%) rotate(45deg);
        }
        100% {
            transform: translateX(100%) rotate(90deg);
        }
    }

    @keyframes preloaderRight {
        33%,
        50% {
            transform: translateX(-50%) rotate(45deg);
        }
        100% {
            transform: translateX(-100%) rotate(90deg);
        }
    }

    @keyframes preloaderCenter {
        33%,
        50% {
            transform: rotate(45deg);
        }
        100% {
            transform: rotate(90deg);
        }
    }
</style>
