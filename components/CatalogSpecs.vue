<script>
    export default {
        name: "CatalogSpecs",
        props: {
            specs: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<template>
    <div class="catalog-specs">
        <h2 class="catalog-specs__title section-title">Характеристики</h2>
        <ul class="catalog-specs__list">
            <li
                v-for="spec in specs"
                :key="spec.id"
                class="catalog-specs__item"
            >
                <span class="catalog-specs__key">{{ spec.key }}</span>
                <span class="catalog-specs__dots"></span>
                <span class="catalog-specs__value">{{ spec.value }}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .catalog-specs {
    }

    .catalog-specs__title {
        margin-bottom: 16px;
        color: $color-light;
        font-weight: 300;
    }

    .catalog-specs__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }

    .catalog-specs__dots {
        align-self: flex-end;
        flex-grow: 1;
        border-bottom: 1px dashed $color-border;
    }
</style>
