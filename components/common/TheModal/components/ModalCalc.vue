<script>
    import TheModalWrapper from "~/components/common/TheModalWrapper";
    import BaseButton from "~/components/common/BaseButton";
    import BaseInput from "~/components/common/BaseInput";
    import BaseSelect from "~/components/common/BaseSelect";

    export default {
        name: "ModalCalc",
        components: { BaseSelect, TheModalWrapper, BaseInput, BaseButton },
        props: {
            target: {
                type: String,
                default: "",
            },
        },
        data() {
            return {
                user: {
                    name: "",
                    phone: "",
                    date: "",
                    city: "",
                },
                errors: {
                    name: "",
                    phone: "",
                    date: "",
                },
                isSuccess: false,
                isLoading: false,
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
            cityList() {
                return [
                    "Севастополь",
                    "Керчь",
                    "Симферополь",
                    "Бахчисарай",
                    "Феодосия",
                    "Щелкино",
                    "Саки",
                    "Джанкой",
                    "Судак ",
                    "Красноперекопск ",
                ].sort((a, b) => a - b);
            },
        },
        methods: {
            submitHandler() {
                this.isLoading = true;
                const date = this.user.date
                    ? new Date(this.user.date).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                      })
                    : "";
                const request = JSON.stringify({
                    name: this.user.name,
                    phone: this.user.phone,
                    city: this.user.city,
                    date,
                    target: this.target,
                });

                this.$axios
                    .post("/api/send-calc", request, {
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
    <div class="modal-calc">
        <the-modal-wrapper title="Бесплатный замер">
            <div v-if="isSuccess" class="modal-calc__success">
                Спасибо за заявку. Наш оператор свяжется с вами в течение дня
                для уточнения дополнительной информации
            </div>
            <form
                v-else
                class="modal-calc__form"
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
                <base-input
                    v-model="user.date"
                    name="date"
                    :min="currentDate"
                    placeholder="Дата замера"
                    type="date"
                    :error-text="errors.date"
                    @error="clearError"
                ></base-input>
                <base-select
                    v-model="user.city"
                    name="city"
                    :list="cityList"
                ></base-select>
                <base-button class="modal-calc__button" :is-loading="isLoading">
                    <the-preloader :show="isLoading"></the-preloader>
                    Вызвать замерщика
                </base-button>
            </form>
        </the-modal-wrapper>
    </div>
</template>

<style lang="scss">
    .modal-calc__button {
        width: 100%;
        margin-top: 12px;
    }

    .modal-calc__success {
        color: $color-light;
        font-size: 16px;
        line-height: 24px;
    }
</style>
