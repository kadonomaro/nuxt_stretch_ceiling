<script>
    export default {
        name: "TheSocialLinks",
    };
</script>

<template>
    <div class="the-social-links">
        <ul class="the-social-links__list">
            <li class="the-social-links__item">
                <a
                    href="https://wa.me/+79785860623"
                    class="the-social-links__link"
                    target="_blank"
                >
                    <img src="/icons/whatsapp.svg" alt="WhatsApp" />
                </a>
            </li>
            <li class="the-social-links__item">
                <a
                    href="viber://pa?chatURI=+79785860623"
                    class="the-social-links__link"
                    target="_blank"
                >
                    <img src="/icons/viber.svg" alt="Viber" />
                </a>
            </li>
            <li class="the-social-links__item">
                <a
                    href="http://telegram.me/Makcim_Prusakov"
                    class="the-social-links__link"
                    target="_blank"
                >
                    <img src="/icons/telegram.svg" alt="Telegram" />
                </a>
            </li>
            <li class="the-social-links__item">
                <a
                    href="https://www.instagram.com/prusakov_m/"
                    class="the-social-links__link"
                    target="_blank"
                >
                    <img src="/icons/instagram.svg" alt="Instagram" />
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .the-social-links__list {
        display: flex;
        margin: 0 -6px;
    }

    .the-social-links__item {
        margin: 0 6px;
    }

    .the-social-links__link {
        display: block;
        width: 24px;
        height: 24px;
        img {
            width: 100%;
        }
        @include bp($bp-desktop-sm) {
            transition: transform 0.2s ease-in;
            &:hover {
                transform: translateY(-2px);
            }
        }
    }
</style>
