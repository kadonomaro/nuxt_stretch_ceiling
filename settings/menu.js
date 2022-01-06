const menu = [
    {
        name: "Натяжные потолки",
        link: "index",
        sub: [
            { name: "Виды", link: "index", hash: "#types" },
            { name: "Галерея", link: "index", hash: "#gallery" },
        ],
    },
    {
        name: "Помощь",
        link: "help",
        sub: [
            {
                name: "Советы по выбору",
                link: "help",
                hash: "#advice",
            },
            {
                name: "Безопасность",
                link: "help",
                hash: "#safety",
            },
            {
                name: "Популярные вопросы",
                link: "faq",
            },
        ],
    },
    {
        name: "О компании",
        link: "about",
        sub: [
            {
                name: "Контакты",
                link: "about",
                hash: "#contacts",
            },
            { name: "Отзывы", link: "about", hash: "#reviews" },
        ],
    },
];

export { menu };
