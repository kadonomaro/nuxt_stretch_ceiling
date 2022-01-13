<script>
    import { createClient } from "~/plugins/contentful.js";
    import BaseButton from "~/components/common/BaseButton";
    import CatalogText from "~/components/CatalogText";

    const client = createClient();

    export default {
        name: "CatalogPage",
        components: { CatalogText, BaseButton },
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
        data() {
            return {
                detail: null,
            };
        },
        head() {
            return {
                title: this.detail.fields.title,
            };
        },
    };
</script>

<template>
    <div class="catalog-page page">
        <div class="container">
            <div v-if="detail" class="catalog-page__inner">
                <main class="catalog-page__main">
                    <div class="catalog-page__slider">
                        <catalog-slider
                            :gallery="detail.fields.gallery"
                        ></catalog-slider>
                    </div>

                    <div v-if="detail.fields.text" class="catalog-page__text">
                        <catalog-text
                            :text="detail.fields.text.content"
                        ></catalog-text>
                    </div>
                </main>
                <aside class="catalog-page__aside box-shadow">
                    <h1 class="page-title">
                        {{ detail.fields.title }}
                    </h1>
                    <div class="catalog-page__specs">
                        <catalog-specs
                            :specs="detail.fields.specs"
                        ></catalog-specs>
                    </div>
                    <div class="catalog-page__price">
                        от <span>{{ detail.fields.price }}</span> ₽ за м²
                    </div>
                    <base-button @click="$popup.show('ModalCalc')">
                        Бесплатный замер
                    </base-button>
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
        margin-bottom: 24px;
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
            position: sticky;
            top: 80px;
            flex-grow: 1;
            padding: 32px;
        }
    }

    .catalog-page__slider {
        margin-bottom: 24px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 60px;
        }
    }

    .catalog-page__specs {
        margin-bottom: 32px;
    }

    .catalog-page__price {
        margin-bottom: 24px;
        font-size: 16px;
        span {
            font-size: 18px;
            font-weight: 600;
        }
        @include bp($bp-desktop-sm) {
            font-size: 20px;
            span {
                font-size: 24px;
            }
        }
    }
</style>
