<script>
    import { createClient } from "~/plugins/contentful.js";
    import TheAccordion from "~/components/common/TheAccordion";

    const client = createClient();

    export default {
        name: "HelpPage",
        components: {
            TheAccordion,
        },
        asyncData() {
            return client
                .getEntries({
                    content_type: "faq",
                    order: "-sys.createdAt",
                })
                .then(({ items }) => {
                    return {
                        faq: items,
                    };
                });
        },
        data() {
            return {
                activeIndex: 0,
            };
        },
        head() {
            return {
                title: "Ответы на частые вопросы",
            };
        },
        methods: {
            changeIndex(index) {
                this.activeIndex = index;
            },
        },
    };
</script>

<template>
    <div class="faq-page page">
        <div class="container">
            <h1 class="page-title">Ответы на частые вопросы</h1>
            <div class="faq-page__accordion box-shadow">
                <the-accordion
                    v-for="(el, index) in faq"
                    :key="index"
                    :active-index="activeIndex"
                    :index="index"
                    :accordion="el"
                    @change="changeIndex"
                >
                </the-accordion>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .faq-page__accordion {
        padding: 0 12px;
        background-color: #fff;
        @include bp($bp-desktop-sm) {
            padding: 6px 24px;
        }
    }
</style>
