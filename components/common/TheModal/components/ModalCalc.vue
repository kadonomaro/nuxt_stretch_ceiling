<script>
    import TheModalWrapper from "~/components/common/TheModalWrapper";
    import BaseButton from "~/components/common/BaseButton";
    import BaseInput from "~/components/common/BaseInput";

    export default {
        name: "ModalCalc",
        components: { TheModalWrapper, BaseInput, BaseButton },
        data() {
            return {
                user: {
                    name: "",
                    phone: "",
                    date: "",
                },
                isSuccess: false,
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
        methods: {
            submitHandler() {
                const date = new Date(this.user.date).toLocaleDateString(
                    "ru-RU",
                    {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    }
                );
                const request = JSON.stringify({
                    name: this.user.name,
                    phone: this.user.phone,
                    date,
                });

                this.$axios
                    .post("/api/send-calc", request, {
                        headers: { "content-type": "application/json" },
                    })
                    .then(() => {
                        this.isSuccess = true;
                    });
            },
        },
    };

    // TODO Валидация данных (на фронте или бэке)
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
                ></base-input>
                <base-input
                    v-model="user.phone"
                    name="phone"
                    placeholder="Номер телефона"
                    type="tel"
                ></base-input>
                <base-input
                    v-model="user.date"
                    name="date"
                    :min="currentDate"
                    placeholder="Дата замера"
                    type="date"
                ></base-input>
                <base-button class="modal-calc__button">
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
