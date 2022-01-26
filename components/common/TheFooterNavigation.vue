<script>
    export default {
        name: "TheFooterNavigation",
        props: {
            menu: {
                type: Object,
                default: () => {},
            },
        },
    };
</script>

<template>
    <nav class="the-footer-navigation">
        <NuxtLink
            class="the-footer-navigation__title"
            :to="{ name: menu.link, hash: menu.hash }"
        >
            {{ menu.name }}
        </NuxtLink>
        <ul class="the-footer-navigation__list">
            <li
                v-for="(item, i) in menu.sub"
                :key="i"
                class="the-footer-navigation__item"
            >
                <NuxtLink
                    class="the-footer-navigation__link"
                    :to="{ name: item.link, hash: item.hash }"
                >
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-footer-navigation__title {
        display: block;
        margin-bottom: 8px;
        color: inherit;
        font-size: 16px;
        font-weight: 500;
        @include bp($bp-desktop-sm) {
            margin-bottom: 12px;
        }
    }

    .the-footer-navigation__title,
    .the-footer-navigation__link {
        text-decoration: none;
        transition: color 0.2s ease-in;
        &:hover {
            color: $color-accent;
        }
        &.nuxt-link-exact-active {
            color: $color-accent;
        }
    }

    .the-footer-navigation__item {
        font-size: 14px;
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }

    .the-footer-navigation__link {
        color: $color-light;
    }
</style>
