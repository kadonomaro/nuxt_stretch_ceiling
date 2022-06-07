<script>
    import HomeCatalogCard from "~/components/HomeCatalogCard";

    export default {
        name: "HomeCatalog",
        components: {
            HomeCatalogCard,
        },
        props: {
            catalog: {
                type: Array,
                default: () => [],
            },
        },
        computed: {
            sortedCatalog() {
                return [...this.catalog].sort(
                    (a, b) => a.fields.sort - b.fields.sort
                );
            },
        },
    };
</script>

<template>
    <section id="types" class="home-catalog">
        <h2 class="section-title">Виды натяжных потолков</h2>
        <div class="home-catalog__list">
            <div
                v-for="(card, i) in sortedCatalog"
                :key="i"
                class="home-catalog__card"
            >
                <home-catalog-card :card="card"></home-catalog-card>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-catalog__list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -6px -16px;
    }

    .home-catalog__card {
        flex-basis: 50%;
        max-width: 50%;
        padding: 0 6px 16px;
        @include bp($bp-desktop-sm) {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
        }
    }
</style>
