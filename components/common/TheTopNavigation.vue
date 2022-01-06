<script>
    export default {
        name: "TheTopNavigation",
    };
</script>

<template>
    <nav class="the-top-navigation">
        <ul class="the-top-navigation__list">
            <li class="the-top-navigation__item">
                <NuxtLink
                    class="the-top-navigation__link"
                    :to="{ name: 'index' }"
                >
                    Натяжные потолки
                </NuxtLink>
            </li>
            <li class="the-top-navigation__item">
                <NuxtLink
                    class="the-top-navigation__link"
                    :to="{ name: 'about' }"
                >
                    О компании
                </NuxtLink>
            </li>
            <li class="the-top-navigation__item">
                <NuxtLink
                    class="the-top-navigation__link"
                    :to="{ name: 'contacts' }"
                >
                    Контакты
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-top-navigation {
    }

    .the-top-navigation__list {
        list-style: none;
        padding: 0;
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
        }
    }

    .the-top-navigation__link {
        display: block;
        padding: 16px 20px;
        font-size: 14px;
        line-height: 20px;
        color: $color-base;
        text-decoration: none;
        transition: color 0.2s ease, background-color 0.2s ease;
        &.nuxt-link-exact-active {
            color: #fff;
            background-color: $color-accent;
        }
        &:hover:not(.nuxt-link-exact-active) {
            color: $color-accent;
        }
        @include bp($bp-desktop-sm) {
            font-size: 18px;
            line-height: 24px;
            font-weight: 500;
        }
    }
</style>
