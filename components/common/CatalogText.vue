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
                paragraphsCount: 1,
                buttonText: "Показать описание",
            };
        },
        computed: {
            computeParagraphs() {
                return this.text.slice(0, this.paragraphsCount);
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
                if (this.paragraphsCount === this.text.length) {
                    this.paragraphsCount = 1;
                    this.buttonText = "Показать описание";
                    this.scrollTo();
                } else {
                    this.paragraphsCount = this.text.length;
                    this.buttonText = "Скрыть описание";
                }
            },
        },
    };
</script>

<template>
    <div ref="text" class="catalog-text typography box-shadow">
        <transition-group
            name="slide-down"
            tag="div"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end"
        >
            <div
                v-for="(paragraph, i) in computeParagraphs"
                :key="i * 2"
                class="catalog-text__paragraph"
            >
                <p>
                    {{ paragraph.content[0].value }}
                </p>
            </div>
        </transition-group>

        <button
            v-if="text.length > 1"
            class="catalog-text__button"
            @click="toggleParagraphs"
        >
            {{ buttonText }}
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
            margin-bottom: 12px;
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
