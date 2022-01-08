<script>
    import { menu } from "~/settings";
    import TransitionContainer from "~/components/common/TransitionContainer";
    import TheSvgIcon from "~/components/common/TheSvgIcon";

    export default {
        name: "TheHeaderMobileNavigation",
        components: { TheSvgIcon, TransitionContainer },
        data() {
            return {
                activeIndexes: [],
            };
        },
        methods: {
            toggleMenu(index) {
                if (this.activeIndexes.includes(index)) {
                    const removedIndex = this.activeIndexes.indexOf(index);
                    this.activeIndexes.splice(removedIndex, 1);
                } else {
                    this.activeIndexes.push(index);
                }
            },
            closeMenu() {
                this.$emit("on-close");
            },
        },
        menu() {
            return menu;
        },
    };
</script>

<template>
    <nav class="the-header-mobile-navigation">
        <ul class="the-header-mobile-navigation__list">
            <li
                v-for="(item, itemIndex) in $options.menu()"
                :key="itemIndex"
                class="the-header-mobile-navigation__item"
                :class="{ 'is-opened': activeIndexes.includes(itemIndex) }"
                @click.self="toggleMenu(itemIndex)"
            >
                <NuxtLink
                    class="the-header-mobile-navigation__link"
                    :to="{ name: item.link, hash: item.hash }"
                    @click.native="closeMenu"
                >
                    {{ item.name }}
                </NuxtLink>
                <the-svg-icon name="arrow"></the-svg-icon>
                <transition-container :show="activeIndexes.includes(itemIndex)">
                    <ul class="the-header-mobile-navigation__sub">
                        <li
                            v-for="(subItem, subIndex) in item.sub"
                            :key="subIndex"
                            class="the-header-mobile-navigation__sub-item"
                        >
                            <NuxtLink
                                exact-active-class=""
                                class="the-header-mobile-navigation__sub-link"
                                :to="{ name: subItem.link, hash: subItem.hash }"
                                @click.native="closeMenu"
                            >
                                {{ subItem.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </transition-container>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-header-mobile-navigation__item {
        position: relative;
        padding: 12px 0;
        &.is-opened {
            svg {
                transform: rotate(270deg);
            }
        }
        svg {
            position: absolute;
            top: 16px;
            right: 0;
            width: 12px;
            height: 12px;
            transform: rotate(180deg);
            transition: transform 0.2s ease-in;
            pointer-events: none;
        }
    }

    .the-header-mobile-navigation__link {
        color: inherit;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.2s ease-in;
        &.nuxt-link-exact-active {
            color: $color-accent;
        }
    }

    .the-header-mobile-navigation__sub {
        margin-top: 6px;
    }

    .the-header-mobile-navigation__sub-link {
        display: inline-block;
        padding: 8px 0;
        color: $color-light;
        font-size: 14px;
        text-decoration: none;
    }
</style>
