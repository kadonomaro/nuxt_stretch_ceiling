<script>
    import TheSvgIcon from "~/components/common/TheSvgIcon";

    export default {
        name: "AboutContacts",
        components: { TheSvgIcon },
    };
</script>

<template>
    <section id="contacts" class="about-contacts">
        <h2 class="section-title">Контакты</h2>
        <div class="about-contacts__inner box-shadow">
            <div class="about-contacts__text">
                <div class="about-contacts__item">
                    <the-svg-icon name="geo"></the-svg-icon>
                    г. Севастополь, просп. Нахимова, 13
                </div>
                <div class="about-contacts__item">
                    <the-svg-icon name="phone"></the-svg-icon>
                    <a class="about-contacts__link" href="tel:+79785860623">
                        +7 (978) 586 06-23
                    </a>
                </div>
                <div class="about-contacts__item">
                    <the-svg-icon name="phone"></the-svg-icon>
                    <a class="about-contacts__link" href="tel:+79782385740">
                        +7 (978) 238 57-40
                    </a>
                </div>
                <div class="about-contacts__item">
                    <the-svg-icon name="mail"></the-svg-icon>
                    <a
                        class="about-contacts__link"
                        href="mailto:barneo.sev@yandex.ru"
                    >
                        barneo.sev@yandex.ru
                    </a>
                </div>
                <div class="about-contacts__item">
                    <the-svg-icon name="calendar"></the-svg-icon>
                    Пн-Вс с 8:00 до 20:00
                </div>
            </div>
            <div class="about-contacts__map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Acbaa2aa259c469b401f44162befb73db7841626dbe67a74de6c245b13264ba33&amp;source=constructor"
                    width="100%"
                    frameborder="0"
                ></iframe>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .about-contacts__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
        }
    }

    .about-contacts__text {
        padding: 24px;
        background-color: #fff;
        @include bp($bp-desktop-sm) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-basis: 30%;
            max-width: 30%;
            padding: 36px;
        }
    }

    .about-contacts__item {
        display: flex;
        color: $color-light;
        font-size: 14px;
        line-height: 20px;
        svg {
            margin-right: 6px;
            width: 20px;
            height: 20px;
            fill: $color-accent;
        }
        &:not(:last-child) {
            margin-bottom: 12px;
        }
        @include bp($bp-desktop-sm) {
            font-size: 16px;
        }
    }

    .about-contacts__link {
        position: relative;
        color: inherit;
        white-space: nowrap;
        text-decoration: none;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 1px;
            background-color: currentColor;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        &:hover {
            &::before {
                opacity: 1;
            }
        }
    }

    .about-contacts__map {
        position: relative;
        &::before {
            content: "";
            display: block;
            padding-bottom: 75%;
        }
        iframe {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
        }
        @include bp($bp-desktop-sm) {
            flex-basis: 70%;
            max-width: 70%;
            &::before {
                padding-bottom: 40%;
            }
        }
    }
</style>
