<script>
    export default {
        name: "ErrorLayout",
        head() {
            return {
                title: "Страница не найдена",
            };
        },
    };
</script>

<template>
    <div class="error-page page">
        <div class="container">
            <div class="error-page__inner">
                <div class="error-page__main">
                    <h1 class="page-title">Страница не найдена</h1>
                    <div class="error-page__text">
                        Пока мы работаем над этой проблемой, вы можете посетить
                        другие страницы сайта
                    </div>
                    <NuxtLink
                        class="error-page__link base-button mobile-hidden"
                        :to="{ name: 'index' }"
                    >
                        Назад
                    </NuxtLink>
                </div>

                <div class="error-page__image">
                    <img src="/images/404.svg" alt="" />
                    <NuxtLink
                        class="error-page__link base-button desktop-hidden"
                        :to="{ name: 'index' }"
                    >
                        Назад
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .error-page {
        flex-grow: 1;
    }

    .error-page__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
        }
    }

    .error-page__main {
        @include bp($bp-desktop-sm) {
            flex-basis: 45%;
            max-width: 45%;
            padding-right: 20px;
        }
    }

    .error-page__text {
        color: $color-light;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 24px;
        @include bp($bp-desktop-sm) {
            font-size: 18px;
            line-height: 32px;
        }
    }

    .error-page__image {
        img {
            width: 100%;
        }
        @include bp($bp-desktop-sm) {
            flex-basis: 55%;
            max-width: 55%;
        }
    }

    .error-page__link {
        margin-top: 24px;
        @include bp($bp-desktop-sm) {
            max-width: 190px;
            margin-top: 36px;
        }
    }
</style>
