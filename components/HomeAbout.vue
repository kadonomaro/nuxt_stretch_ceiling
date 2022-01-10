<script>
    export default {
        name: "HomeAbout",
        props: {
            about: {
                type: Object,
                default: () => {},
            },
        },
    };
</script>

<template>
    <section class="home-about box-shadow">
        <div class="home-about__text">
            <h2 class="home-about__title section-title">
                {{ about.fields.title }}
            </h2>
            <div class="home-about__description">
                {{ about.fields.description }}
            </div>
            <div class="home-about__specs">
                <div class="home-about__specs-item">
                    <div>5</div>
                    <div>лет опыта</div>
                </div>
                <div class="home-about__specs-item">
                    <div>30+</div>
                    <div>довольных клиентов</div>
                </div>
                <div class="home-about__specs-item">
                    <div>1200+</div>
                    <div>м² натяжных потолков</div>
                </div>
            </div>
        </div>
        <div class="home-about__image">
            <img
                :src="about.fields.image.fields.file.url"
                :alt="about.fields.title"
            />
        </div>
    </section>
</template>

<style lang="scss">
    .home-about {
        @include bp($bp-desktop-sm) {
            display: flex;
        }
    }

    .home-about__text {
        display: flex;
        flex-direction: column;
        padding: 24px;
        background-color: #fff;
        @include bp($bp-desktop-sm) {
            flex-basis: 45%;
            max-width: 45%;
            padding: 32px;
        }
    }

    .home-about__image {
        position: relative;
        &::before {
            content: "";
            display: block;
            padding-bottom: 50%;
        }
        img {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
        @include bp($bp-desktop-sm) {
            flex-basis: 55%;
            max-width: 55%;
        }
    }

    .home-about__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .home-about__description {
        margin-bottom: auto;
        color: $color-light;
        font-size: 14px;
        line-height: 24px;
    }

    .home-about__specs {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 16px -4px 0;
    }

    .home-about__specs-item {
        flex-basis: 33.3333%;
        max-width: 33.3333%;
        padding: 0 4px;
        div {
            &:first-child {
                font-size: 28px;
                font-weight: 600;
            }
            &:last-child {
                font-size: 12px;
                color: $color-light;
            }
        }
    }
</style>
