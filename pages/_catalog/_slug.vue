<script>
    import { createClient } from "~/plugins/contentful.js";

    const client = createClient();

    export default {
        name: "CatalogPage",
        asyncData({ params }) {
            return client
                .getEntries({
                    content_type: "detail",
                    "fields.slug[in]": params.slug,
                })
                .then(({ items }) => {
                    return {
                        detail: items[0],
                    };
                });
        },
    };
</script>

<template>
    <div class="catalog-page page">
        <div class="container">
            <div v-if="detail" class="catalog-page__inner">
                <main class="catalog-page__main">
                    <catalog-slider
                        :gallery="detail.fields.gallery"
                    ></catalog-slider>
                </main>
                <aside class="catalog-page__aside box-shadow">
                    <h1 class="catalog-page__title page-title">
                        {{ detail.fields.title }}
                    </h1>
                    <div class="catalog-page__specs">
                        <h2 class="catalog-page__caption section-title">
                            Характеристики
                        </h2>
                    </div>
                    <div class="catalog-page__price">
                        от {{ detail.fields.price }} ₽
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .catalog-page {
        &.page {
            @include bp($bp-desktop-sm) {
                padding: 80px 0;
            }
        }
    }

    .catalog-page__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: flex-start;
        }
    }

    .catalog-page__main {
        margin-bottom: 12px;
        @include bp($bp-desktop-sm) {
            flex-basis: 60%;
            flex-shrink: 0;
            max-width: 60%;
            margin-bottom: 0;
            margin-right: 24px;
        }
    }

    .catalog-page__aside {
        background-color: #fff;
        padding: 16px;
        @include bp($bp-desktop-sm) {
            flex-grow: 1;
            padding: 32px;
        }
    }

    .catalog-page__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .catalog-page__caption {
        color: $color-light;
        font-weight: 300;
    }

    .catalog-page__specs {
        margin-bottom: 32px;
    }

    .catalog-page__price {
        font-size: 18px;
        font-weight: 600;
        @include bp($bp-desktop-sm) {
            font-size: 24px;
        }
    }
</style>
