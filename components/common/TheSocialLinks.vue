<script>
    export default {
        name: "TheSocialLinks",
    };
</script>

<template>
    <div class="the-social-links">
        <ul class="the-social-links__list">
            <li class="the-social-links__item">
                <a href="" class="the-social-links__link">
                    <img src="/icons/instagram.svg" alt="" />
                </a>
            </li>
            <li class="the-social-links__item">
                <a href="" class="the-social-links__link">
                    <img src="/icons/youtube.svg" alt="" />
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .the-social-links__list {
        display: flex;
        margin: 0 -6px;
    }

    .the-social-links__item {
        margin: 0 6px;
    }
</style>
