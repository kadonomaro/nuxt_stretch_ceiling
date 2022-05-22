<script>
    export default {
        name: "TheSocialLinks",
        links() {
            return [
                { href: "https://wa.me/+79111111111", icon: "whatsapp.svg" },
                { href: "http://telegram.me/", icon: "telegram.svg" },
                { href: "https://www.instagram.com/", icon: "instagram.svg" },
            ];
        },
    };
</script>

<template functional>
    <div class="the-social-links">
        <ul class="the-social-links__list">
            <li
                v-for="(link, index) in $options.links()"
                :key="index"
                class="the-social-links__item"
            >
                <a
                    :href="link.href"
                    class="the-social-links__link"
                    target="_blank"
                >
                    <img :src="`/icons/social/${link.icon}`" alt="" />
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

    .the-social-links__link {
        display: block;
        width: 24px;
        height: 24px;
        img {
            width: 100%;
        }
        @include bp($bp-desktop-sm) {
            width: 32px;
            height: 32px;
            transition: transform 0.2s ease-in;
            &:hover {
                transform: translateY(-2px);
            }
        }
    }
</style>
