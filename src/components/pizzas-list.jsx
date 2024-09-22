import { useState } from "react"
import { counter, pizzaAtom, samePizzasAmount } from "../store/atoms"
import { useAtom } from "jotai"

export function PizzasList() {
    const pizzas = [
        {
            name: "Піца з в’яленими томатами та куркою",
            price: 345.00,
            img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FPitsa%20z%20vialenymy%20tomatamy%2Fdriedtomato-pieces.webp&w=480&q=75 ",
            ingredients: "В’ялені томати, Курка, Фета, Моцарела, Соус Альфредо, Шпинат"
        },
        {
            name: "Піца з грушею і блакитним сиром",
            price: 285.00,
            img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FHrusha%2Fpearandbluecheese-pieces.webp&w=480&q=75 ",
            ingredients: "Соус Альфредо, Бергадер Блю, Моцарела, Груша"
        },
        {
            name: "Піца з індичкою",
            price: 310.00,
            img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2Fturkey-pizzapieces.webp&w=480&q=75 ",
            ingredients: "Соус Альфредо, Моцарела, Індичка, Крем-сир Філадельфія"
        },
        {
            name: "Піца Техас",
            price: 239.00,
            img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Ftekhas-300dpi.webp&w=480&q=75 ",
            ingredients: "Соус Барбекю, Ковбаски баварські, Гриби, Цибуля, Моцарела, Кукурудза"
        },
        {
            name: "Піца Пепероні з томатами",
            price: 239.00,
            img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FPitsa%20z%20vialenymy%20tomatamy%2Fdriedtomato-pieces.webp&w=480&q=75 ",
            ingredients: "Моцарела, Соус Барбекю, Помідори, Пепероні"
        },
        {
            name: "Піца Карбонара",
            price: 239.00,
            img: "https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fkarbonara-300dpi.webp&w=480&q=75 ",
            ingredients: "Соус Альфредо, Гриби, Шинка, Бекон, Цибуля, Моцарела"
        },
    ]

    const [pizzasCart, setPizzasCart] = useAtom(pizzaAtom)
    const [pizzaCounter, setPizzaCounter] = useAtom(counter)
    const [samePizzas, setSamePizzasAmount] = useAtom(samePizzasAmount)

    function addToCart(pizza) {
        let updatedCartList = [...pizzasCart, pizza]
        setPizzasCart(updatedCartList)
        setPizzaCounter(pizzaCounter + 1)
    }

    return(
        <div className="pizzas-list">
            {pizzas.map((pizza, index) =>
            <div key={index} className="pizza-card">
                <img src={pizza.img}/>
                <div className="txt">
                    <h3>{pizza.name}</h3>
                    <p>Інградієнти: {pizza.ingredients}</p>
                </div>
                <button className="btn" onClick={() => addToCart(pizza)}>Додати до кошика</button>
            </div>
            )}
        </div>
    )
}