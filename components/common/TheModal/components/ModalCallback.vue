<script>
    import TheModalWrapper from "~/components/common/TheModalWrapper";
    import BaseButton from "~/components/common/BaseButton";
    import BaseInput from "~/components/common/BaseInput";

    export default {
        name: "ModalCallback",
        components: { BaseInput, BaseButton, TheModalWrapper },
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
        <the-modal-wrapper title="Бесплатный звонок">
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
        @include bp($bp-desktop-sm) {
            width: auto;
        }
    }
</style>
