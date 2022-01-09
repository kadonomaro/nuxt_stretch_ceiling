<script>
    import TheModalWrapper from "~/components/common/TheModalWrapper";
    import BaseButton from "~/components/common/BaseButton";
    import BaseInput from "~/components/common/BaseInput";

    export default {
        name: "ModalCalc",
        components: { TheModalWrapper, BaseInput, BaseButton },
        data() {
            return {
                name: "",
                phone: "",
                date: "",
            };
        },
        computed: {
            currentDate() {
                const date = new Date();
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate() + 1;

                return [
                    year,
                    month < 10 ? "0" + month : month,
                    day < 10 ? "0" + day : day,
                ].join("-");
            },
        },
    };
</script>

<template>
    <div class="modal-calc">
        <the-modal-wrapper title="Бесплатный замер">
            <base-input
                v-model="name"
                name="name"
                placeholder="Имя"
            ></base-input>
            <base-input
                v-model="phone"
                name="phone"
                placeholder="Номер телефона"
                type="tel"
            ></base-input>
            <base-input
                v-model="date"
                name="date"
                :min="currentDate"
                placeholder="Дата замера"
                type="date"
            ></base-input>
            <base-button class="modal-calc__button">
                Вызвать замерщика
            </base-button>
        </the-modal-wrapper>
    </div>
</template>

<style lang="scss">
    .modal-calc__button {
        width: 100%;
        margin-top: 12px;
    }
</style>
