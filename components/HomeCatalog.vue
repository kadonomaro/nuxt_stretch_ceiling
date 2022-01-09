<script>
    export default {
        name: "HomeCatalog",
        props: {
            catalog: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<template>
    <section id="types" class="home-catalog">
        <h2 class="home-catalog__title section-title">
            Виды натяжных потолков
        </h2>
        <div class="home-catalog__list">
            <div
                v-for="(card, i) in catalog"
                :key="i"
                class="home-catalog__card"
            >
                <home-catalog-card :card="card"></home-catalog-card>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-catalog__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .home-catalog__list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -6px -12px;
        @include bp($bp-desktop-sm) {
            margin: 0 -12px -24px;
        }
    }

    .home-catalog__card {
        flex-basis: 50%;
        max-width: 50%;
        padding: 0 6px 12px;
        @include bp($bp-desktop-sm) {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
            padding: 0 12px 24px;
        }
    }
</style>
