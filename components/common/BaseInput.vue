<script>
    export default {
        name: "BaseInput",
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
                    return ["text", "number", "password", "tel"].includes(
                        value
                    );
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
        },
        data() {
            return {
                error: "",
            };
        },
        computed: {
            className() {
                return this.componentClassNames("base-input").filter(Boolean);
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
        },
    };
</script>

<template>
    <label class="base-input">
        <input
            class="base-input__field"
            :class="className"
            :placeholder="placeholder"
            :type="type"
            :value="value"
            :name="name"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
            @keyup="keyupElement"
            @click="$emit('click')"
            @change="$emit('change')"
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
