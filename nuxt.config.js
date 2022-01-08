const config = require("./.contentful.json");

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - Натяжные потолки в Крыму",
        title: "",
        htmlAttrs: {
            lang: "ru",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content:
                    "Монтаж глянцевых, матовых и сатиновых натяжных потолков в Крыму. Доступные цены, высокое качество, гарантии.",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicons/favicon.ico",
            },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicons/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicons/favicon-16x16.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicons/favicon-32x32.png",
            },
            {
                rel: "manifest",
                href: "/favicons/site.webmanifest",
            },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/index.scss"],
    styleResources: {
        scss: ["@/assets/css/variables.scss", "@/assets/css/mq.scss"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/event-bus.js" },
        { src: "~/plugins/modals.js" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    env: {
        CTF_SPACE_ID: config.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    },

    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition;
            }

            const findEl = (hash, x) => {
                return (
                    document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve();
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1));
                        }, 100);
                    })
                );
            };

            if (to.hash) {
                const el = await findEl(to.hash);
                if ("scrollBehavior" in document.documentElement.style) {
                    return window.scrollTo({
                        top: el.offsetTop - 60,
                        behavior: "smooth",
                    });
                } else {
                    return window.scrollTo(0, el.offsetTop - 60);
                }
            }

            return { x: 0, y: 0 };
        },
    },
};
