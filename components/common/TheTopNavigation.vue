<script>
    import { menu } from "~/settings";

    export default {
        name: "TheTopNavigation",
        menu() {
            return menu;
        },
    };
</script>

<template>
    <nav class="the-top-navigation">
        <ul class="the-top-navigation__list">
            <li
                v-for="(item, itemIndex) in $options.menu()"
                :key="itemIndex"
                class="the-top-navigation__item"
            >
                <NuxtLink
                    class="the-top-navigation__link"
                    :to="{ name: item.link, hash: item.hash }"
                >
                    {{ item.name }}
                </NuxtLink>
                <ul class="the-top-navigation__sub">
                    <li
                        v-for="(subItem, subIndex) in item.sub"
                        :key="subIndex"
                        class="the-top-navigation__item"
                    >
                        <NuxtLink
                            exact-active-class=""
                            class="the-top-navigation__link"
                            :to="{ name: subItem.link, hash: subItem.hash }"
                        >
                            {{ subItem.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-top-navigation__list {
        list-style: none;
        padding: 0;
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
        }
    }

    .the-top-navigation__item {
        position: relative;
        @include bp($bp-desktop-sm) {
            &:hover {
                .the-top-navigation__sub {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }

    .the-top-navigation__link {
        display: block;
        padding: 16px 20px;
        color: $color-base;
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;
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

    .the-top-navigation__sub {
        position: absolute;
        z-index: 3;
        left: 0;
        top: 100%;
        min-width: 100%;
        background-color: #fff;
        transition: opacity 0.2s ease-in, visibility 0.2s ease-in;
        opacity: 0;
        visibility: hidden;
        box-shadow: 0 5px 12px rgba(#000, 0.1);
        .the-top-navigation__link {
            font-size: 16px;
            &.nuxt-link-active {
                color: $color-accent;
            }
        }
    }
</style>
