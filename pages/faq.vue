<script>
    import TheAccordion from "~/components/common/TheAccordion";

    export default {
        name: "HelpPage",
        components: {
            TheAccordion,
        },
        data() {
            return {
                faq: null,
                activeIndex: 0,
            };
        },
        async fetch() {
            await this.$api
                .getEntries({
                    content_type: "faq",
                    order: "-sys.createdAt",
                })
                .then(({ items }) => {
                    this.faq = items;
                });
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
