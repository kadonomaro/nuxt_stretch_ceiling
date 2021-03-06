<script>
    import BaseButton from "~/components/common/BaseButton";
    import CatalogSlider from "~/components/CatalogSlider";
    import CatalogSpecs from "~/components/CatalogSpecs";
    import CatalogText from "~/components/CatalogText";

    export default {
        name: "CatalogPage",
        components: {
            BaseButton,
            CatalogSlider,
            CatalogSpecs,
            CatalogText,
        },
        data() {
            return {
                detail: null,
            };
        },
        async fetch() {
            await this.$api
                .getEntries({
                    content_type: "detail",
                    "fields.slug[in]": this.$route.params.slug || "",
                })
                .then(({ items }) => {
                    if (!items.length) {
                        throw new Error("Page not found");
                    }
                    this.detail = items[0];
                })
                .catch(() => {
                    this.$nuxt.context.error({ statusCode: 404 });
                });
        },
        head() {
            return {
                title: this.detail?.fields?.title,
            };
        },
        methods: {
            openModal() {
                this.$popup.show("ModalCalc", {
                    target: this.detail.fields.title,
                });
            },
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
                    <div v-if="detail.fields.specs" class="catalog-page__specs">
                        <catalog-specs
                            :specs="detail.fields.specs"
                        ></catalog-specs>
                    </div>
                    <div class="catalog-page__price">
                        от <span>{{ detail.fields.price }}</span> ₽ за м²
                    </div>
                    <base-button @click="openModal">
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
