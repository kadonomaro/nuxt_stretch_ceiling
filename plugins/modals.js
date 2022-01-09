import Vue from "vue";

Vue.use({
    install(Vue) {
        Vue.prototype.$popup = {
            show(nameOrComponent, props, options) {
                Vue.prototype.$eventBus.$emit("popup-show", {
                    nameOrComponent,
                    props,
                    options,
                });
            },
            close() {
                Vue.prototype.$eventBus.$emit("popup-close");
            },
        };
    },
});

const ModalCallback = () =>
    import(
        /* webpackChunkName: "Modal_Callback" */ "~/components/common/TheModal/components/ModalCallback"
    );

const ModalCalc = () =>
    import(
        /* webpackChunkName: "ModalCalс" */ "~/components/common/TheModal/components/ModalCalc"
    );

const ModalGallery = () =>
    import(
        /* webpackChunkName: "ModalGallery" */ "~/components/common/TheModal/components/ModalGallery"
    );

Vue.component("ModalCallback", ModalCallback);
Vue.component("ModalCalc", ModalCalc);
Vue.component("ModalGallery", ModalGallery);
