const config = require("./.contentful.json");
const { createClient } = require("contentful");

const client = createClient({
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_ACCESS_TOKEN,
});

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - Монтаж современных натяжных потолков в Москве",
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
                    "Эксперты в области креативных и нестандартных решений для натяжных потолков в Москве. Высокое качество и доступные цены",
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
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/index.scss"],
    styleResources: {
        scss: ["@/assets/css/variables.scss", "@/assets/css/mq.scss"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/contentful.js" },
        { src: "~/plugins/event-bus.js" },
        { src: "~/plugins/modals.js" },
        { src: "~/plugins/global.js" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "@nuxtjs/robots",
        "@nuxtjs/sitemap",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "https://api-stretch-ceiling.vercel.app/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        filenames: {
            chunk: () => "[name].[contenthash:8].js",
        },
    },

    env: {
        CTF_SPACE_ID: config.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    },

    loading: {
        color: "#00477e",
        height: "2px",
    },

    generate: { fallback: true },

    robots: {
        UserAgent: "*",
        Sitemap: "https://nuxt-stretch-ceiling.web.app/sitemap.xml",
    },

    sitemap: {
        hostname: "https://nuxt-stretch-ceiling.web.app/",
        routes: async () => {
            const response = await client.getEntries({
                content_type: "ceiling_type",
                order: "-sys.createdAt",
            });
            return response.items.map((page) => `/catalog/${page.fields.slug}`);
        },
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
