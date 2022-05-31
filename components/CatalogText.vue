<script>
    export default {
        name: "CatalogText",
        props: {
            text: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                buttonText: "Показать описание",
                isVisibleText: false,
            };
        },
        computed: {
            startParagraph() {
                return this.text[0];
            },
            endParagraph() {
                return this.text.slice(1, this.text.length);
            },
            moreTextButton() {
                return this.isVisibleText
                    ? "Скрыть описание"
                    : "Показать описание";
            },
        },
        methods: {
            start(el) {
                el.style.height = el.scrollHeight + "px";
            },
            end(el) {
                el.style.height = "";
            },
            scrollTo() {
                const el = this.$refs.text;
                const top =
                    el.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({
                    top,
                    behavior: "smooth",
                });
            },
            toggleParagraphs() {
                if (this.isVisibleText) {
                    this.isVisibleText = false;
                    this.scrollTo();
                } else {
                    this.isVisibleText = true;
                }
            },
        },
    };
</script>

<template>
    <div ref="text" class="catalog-text typography box-shadow">
        <div class="catalog-text__paragraph">
            <p>
                {{ startParagraph.content[0].value }}
            </p>
        </div>
        <transition
            name="slide-down"
            tag="div"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end"
        >
            <div v-show="isVisibleText" class="catalog-text__paragraph">
                <p v-for="(paragraph, i) in endParagraph" :key="i * 2">
                    {{ paragraph.content[0].value }}
                </p>
            </div>
        </transition>

        <button
            v-if="text.length > 1"
            class="catalog-text__button"
            @click="toggleParagraphs"
        >
            {{ moreTextButton }}
        </button>
    </div>
</template>

<style lang="scss">
    .catalog-text {
        --transition-duration--slide-down: 0.5s;
        padding: 16px;
        background-color: #fff;
        @include bp($bp-desktop-sm) {
            padding: 24px;
        }
    }

    .catalog-text__paragraph {
        p {
            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }
    }

    .catalog-text__button {
        padding: 8px 0;
        color: $color-accent;
        font-size: 14px;
        font-weight: 500;
        user-select: none;
    }
</style>
