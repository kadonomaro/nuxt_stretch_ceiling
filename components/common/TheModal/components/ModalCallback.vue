<script>
    import TheModalWrapper from "~/components/common/TheModalWrapper";
    import BaseInput from "~/components/common/BaseInput";
    import BaseButton from "~/components/common/BaseButton";

    export default {
        name: "ModalCallback",
        components: { TheModalWrapper, BaseInput, BaseButton },
        data() {
            return {
                name: "",
                phone: "",
            };
        },
    };
</script>

<template>
    <div class="modal-callback">
        <the-modal-wrapper title="Обратный звонок">
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
            <base-button class="modal-callback__button">
                Заказать звонок
            </base-button>
        </the-modal-wrapper>
    </div>
</template>

<style lang="scss">
    .modal-callback__button {
        width: 100%;
        margin-top: 12px;
    }
</style>
