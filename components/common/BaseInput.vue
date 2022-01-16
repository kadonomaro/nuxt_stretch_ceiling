<script>
    import { VueMaskDirective } from "v-mask";

    export default {
        name: "BaseInput",
        directives: {
            mask: VueMaskDirective,
        },
        props: {
            value: {
                type: String,
                default: "",
            },
            placeholder: {
                type: String,
                default: "",
            },
            type: {
                type: String,
                default: "text",
                validator: (value) => {
                    return ["text", "number", "tel", "date"].includes(value);
                },
            },
            errorText: {
                type: String,
                default: "",
            },
            name: {
                type: String,
                default: "",
            },
            min: {
                type: String,
                default: "",
            },
            mask: {
                type: String,
                default: "",
            },
        },
        data() {
            return {
                error: this.errorText,
            };
        },
        computed: {
            className() {
                return this.componentClassNames("base-input").filter(Boolean);
            },
        },
        watch: {
            errorText(val) {
                this.error = val;
            },
        },
        methods: {
            componentClassNames(className) {
                return [
                    this.disabled ? `${className}--disabled` : "",
                    this.error ? `${className}--error` : "",
                    String(this.value).length > 0 ? `${className}--active` : "",
                ];
            },
            keyupElement({ key, target }) {
                if (key !== "Enter") {
                    this.error = "";
                    this.$emit("error", this.name);
                }
                this.$emit("keyup", target.value);
            },
            changeElement() {
                this.error = "";
                this.$emit("change");
            },
        },
    };
</script>

<template>
    <label class="base-input">
        <input
            v-mask="mask"
            class="base-input__field"
            :class="className"
            :placeholder="placeholder"
            :type="type"
            :value="value"
            :name="name"
            :min="min"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
            @keyup="keyupElement"
            @click="$emit('click')"
            @change="changeElement"
            @keypress="$emit('keypress')"
        />
        <span v-if="error" class="base-input__error">
            {{ error }}
        </span>
    </label>
</template>

<style lang="scss">
    .base-input {
        width: 100%;
        display: block;

        &:not(:first-child) {
            margin-top: 12px;
        }
    }

    .base-input__field {
        width: inherit;
        color: $color-base;
        font-family: inherit;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        border: 2px solid $color-border;
        padding: 16px 24px;
        transition: border-color 0.2s ease-in;
        background-color: #fff;
        outline: none;
        &:hover:not(.base-input--error),
        &:focus:not(.base-input--error) {
            border-color: $color-accent;
        }
    }

    .base-input__error {
        display: block;
        margin-top: 4px;
        padding-left: 12px;
        font-size: 12px;
        line-height: 16px;
        color: $color-danger;
        text-align: left;
    }

    .base-input--disabled {
        opacity: 0.7;
    }

    .base-input--active {
        &:not(.base-input--error) {
            border-color: $color-accent;
        }
        &:hover:not(.base-input--error),
        &:focus:not(.base-input--error) {
            border-color: $color-accent;
        }
    }

    .base-input--error {
        border-color: $color-danger;
    }
</style>
