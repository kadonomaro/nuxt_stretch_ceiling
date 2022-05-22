<script>
    import BaseButton from "~/components/common/BaseButton";

    export default {
        name: "HomeWork",
        components: {
            BaseButton,
        },
        list() {
            return [
                { title: "Получаем заявку", icon: "call" },
                { title: "Выезд на замер", icon: "ruler" },
                { title: "Быстрый просчет", icon: "calc" },
                { title: "Согласование макета", icon: "documents" },
                { title: "Безопасный монтаж", icon: "worker" },
                { title: "Гарантия качества", icon: "shield" },
            ];
        },
    };
</script>

<template>
    <section class="home-work box-shadow">
        <h2 class="section-title">Как мы работаем</h2>
        <div class="home-work__list">
            <div
                v-for="(item, i) in $options.list()"
                :key="i"
                class="home-work__item"
            >
                <div class="home-work__icon">
                    <img
                        :src="`/icons/home/${item.icon}.svg`"
                        :alt="item.title"
                    />
                </div>
                <div class="home-work__caption">{{ item.title }}</div>
            </div>
        </div>
        <base-button
            class="home-work__button"
            @click="$popup.show('ModalCalc')"
        >
            Бесплатный замер
        </base-button>
    </section>
</template>

<style lang="scss">
    .home-work {
        padding: 16px;
        background-color: #fff;
        @include bp($bp-desktop-sm) {
            padding: 32px 40px;
        }
    }

    .home-work__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .home-work__item {
        flex-basis: 50%;
        max-width: 50%;
        margin-bottom: 20px;
        text-align: center;
        @include bp($bp-tablet) {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
        }
        @include bp($bp-desktop-sm) {
            flex-basis: 16.6666%;
            max-width: 16.6666%;
            margin-bottom: 0;
        }
    }

    .home-work__icon {
        width: 40px;
        height: 40px;
        margin: 0 auto 12px;
        @include bp($bp-desktop-sm) {
            width: 60px;
            height: 60px;
        }
    }

    .home-work__caption {
        font-size: 14px;
        font-weight: 500;
    }

    .home-work__button {
        margin: 0 auto;
    }
</style>
