<script>
    export default {
        name: "BaseSelect",
        props: {
            list: {
                type: Array,
                default: () => {},
            },
            value: {
                type: String,
                default: "",
            },
            name: {
                type: String,
                default: "",
            },
        },
    };
</script>

<template>
    <label class="base-select">
        <select
            class="base-select__field"
            :name="name"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
            <option value="" disabled selected hidden>Выберите город</option>
            <option v-for="(item, i) in list" :key="i" :value="item">
                {{ item }}
            </option>
        </select>
    </label>
</template>

<style lang="scss">
    .base-select {
        width: 100%;
        display: block;

        &:not(:first-child) {
            margin-top: 12px;
        }
    }

    .base-select__field {
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
        &:hover,
        &:focus {
            border-color: $color-accent;
        }
    }
</style>
