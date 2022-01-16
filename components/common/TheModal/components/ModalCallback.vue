<script>
    import TheModalWrapper from "~/components/common/TheModalWrapper";
    import BaseInput from "~/components/common/BaseInput";
    import BaseButton from "~/components/common/BaseButton";

    export default {
        name: "ModalCallback",
        components: { TheModalWrapper, BaseInput, BaseButton },
        data() {
            return {
                user: {
                    name: "",
                    phone: "",
                },
                errors: {
                    name: "",
                    phone: "",
                },
                isSuccess: false,
                isLoading: false,
            };
        },
        methods: {
            submitHandler() {
                this.isLoading = true;
                this.$axios
                    .post("/api/send-callback", JSON.stringify(this.user), {
                        headers: { "content-type": "application/json" },
                    })
                    .then(({ data }) => {
                        this.isLoading = false;
                        if (data.success) {
                            this.isSuccess = true;
                        } else {
                            data.errors.forEach((error) => {
                                this.errors[error.param] = error.msg;
                            });
                        }
                    });
            },
            clearError(field) {
                this.errors[field] = "";
            },
        },
    };
</script>

<template>
    <div class="modal-callback">
        <the-modal-wrapper title="Обратный звонок">
            <div v-if="isSuccess" class="modal-callback__success">
                Спасибо за заявку. Наш оператор свяжется с вами в течение дня
            </div>
            <form
                v-else
                class="modal-callback__form"
                @submit.prevent="submitHandler"
            >
                <base-input
                    v-model="user.name"
                    name="name"
                    placeholder="Имя"
                    :error-text="errors.name"
                    @error="clearError"
                ></base-input>
                <base-input
                    v-model="user.phone"
                    mask="# (###) ###-##-##"
                    name="phone"
                    placeholder="Номер телефона"
                    type="tel"
                    :error-text="errors.phone"
                    @error="clearError"
                ></base-input>
                <base-button
                    class="modal-callback__button"
                    :is-loading="isLoading"
                >
                    <the-preloader :show="isLoading"></the-preloader>
                    Заказать звонок
                </base-button>
            </form>
        </the-modal-wrapper>
    </div>
</template>

<style lang="scss">
    .modal-callback__button {
        width: 100%;
        margin-top: 12px;
    }

    .modal-callback__success {
        color: $color-light;
        font-size: 16px;
        line-height: 24px;
    }
</style>
