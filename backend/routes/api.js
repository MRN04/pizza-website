const express = require('express');
const router = express.Router();

const pizzas = [
    {
        name: "Піца з в’яленими томатами та куркою",
        price: 345.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FPitsa%20z%20vialenymy%20tomatamy%2Fdriedtomato-pieces.webp&w=480&q=75 ",
        ingredients: "В’ялені томати, Курка, Фета, Моцарела, Соус Альфредо, Шпинат",
        index : 1,
        count: 0,
    },
    {
        name: "Піца з грушею і блакитним сиром",
        price: 285.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FHrusha%2Fpearandbluecheese-pieces.webp&w=480&q=75 ",
        ingredients: "Соус Альфредо, Бергадер Блю, Моцарела, Груша",
        index : 2,
        count: 0,
    },
    {
        name: "Піца з індичкою",
        price: 310.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2Fturkey-pizzapieces.webp&w=480&q=75 ",
        ingredients: "Соус Альфредо, Моцарела, Індичка, Крем-сир Філадельфія",
        index : 3,
        count: 0,
    },
    {
        name: "Піца Техас",
        price: 239.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Ftekhas-300dpi.webp&w=480&q=75 ",
        ingredients: "Соус Барбекю, Ковбаски баварські, Гриби, Цибуля, Моцарела, Кукурудза",
        index : 4,
        count: 0,
    },
    {
        name: "Піца Пепероні з томатами",
        price: 239.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FPitsa%20z%20vialenymy%20tomatamy%2Fdriedtomato-pieces.webp&w=480&q=75 ",
        ingredients: "Моцарела, Соус Барбекю, Помідори, Пепероні",
        index : 5,
        count: 0,
    },
    {
        name: "Піца Карбонара",
        price: 239.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fkarbonara-300dpi.webp&w=480&q=75 ",
        ingredients: "Соус Альфредо, Гриби, Шинка, Бекон, Цибуля, Моцарела",
        index : 6,
        count: 0,
    },
    {
        name: "Піца Кантрі",
        price: 285.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fkantry-300dpi-min.webp&w=480&q=75",
        ingredients: "Соус Часниковий, Огірки мариновані, Гриби, Шинка, Бекон, Цибуля, Моцарела",
        index : 7,
        count: 0,
    },
    {
        name: "Піца Прованс",
        price: 305.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fprovans-300dpi-min.webp&w=480&q=75",
        ingredients: "Помідори, Пепероні, Шинка, Соус Альфредо, Бергадер Блю, Моцарела",
        index : 8,
        count: 0,
    },
    {
        name: "Піца Гавайська",
        price: 345.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fhavaiska-300dpi.webp&w=480&q=75",
        ingredients: "Курка, Соус Domino's, Ананас, Моцарела",
        index : 9,
        count: 0,
    },
    {
        name: "Піца П'ять Сирів",
        price: 345.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fpiat-syrov-300dpi.webp&w=480&q=75",
        ingredients: "Чеддер, Соус Альфредо, Бергадер Блю, Пармезан, Моцарела, Фета",
        index : 10,
        count: 0,
    },
    {
        name: "Піца Шпинат і Фета",
        price: 310.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fshpynatfeta-300dpi.webp&w=480&q=75",
        ingredients: "Гриби, Шпинат, Соус Альфредо, Помідори, Оливки, Моцарела, Болгарський перець, Фета",
        index : 11,
        count: 0,
    },
    {
        name: "Піца Чікен кебаб",
        price: 300.00,
        img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fchiken-kebab.webp&w=480&q=75",
        ingredients: "Огірки мариновані, Цибуля, Гриби, Соус Domino's, Курка, Моцарела, Поливка (соус Burger)",
        index : 12,
        count: 0,
    },
];

router.get('/data', async (req, res) => {
    try {
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 2000)
        })
        res.json(pizzas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;