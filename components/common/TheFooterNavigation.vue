<script>
    export default {
        name: "TheFooterNavigation",
        props: {
            list: {
                type: Object,
                default: () => {},
            },
        },
    };
</script>

<template>
    <nav class="the-footer-navigation">
        <div class="the-footer-navigation__title">{{ list.title }}</div>
        <ul class="the-footer-navigation__list">
            <li
                v-for="(item, i) in list.menu"
                :key="i"
                class="the-footer-navigation__item"
            >
                <NuxtLink class="the-footer-navigation__link" to="/">
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-footer-navigation {
    }

    .the-footer-navigation__title {
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 500;
    }

    .the-footer-navigation__item {
        font-size: 14px;
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }

    .the-footer-navigation__link {
        color: $color-light;
        text-decoration: none;
        transition: color 0.2s ease-in;
        &:hover {
            color: $color-accent;
        }
    }
</style>
