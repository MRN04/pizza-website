import { useState } from "react"
import { allPizzas, pizzaAtom, samePizzasAmount } from "../../store/atoms"
import { useAtom } from "jotai"
import "./pizzas-list.css"



export function PizzasList() {
    const [pizzas, setPizzas] = useAtom(allPizzas)
    const [pizzasCart, setPizzasCart] = useAtom(pizzaAtom)
    const [samePizzas, setSamePizzasAmount] = useAtom(samePizzasAmount)
    
    function addToCart(pizza) {
        if (pizza.count === 0) {
            const pizzaIndex = pizza.index
            const updatedCartList = [...pizzasCart, pizza]
            for (let i = 0; i < updatedCartList.length; i++) {
                if (updatedCartList[i].index === pizzaIndex) {
                    updatedCartList[i].count++
                }
            }
            setPizzasCart(updatedCartList)
        }
        else {
            const pizzaIndex = pizza.index
            const updatedCounters = [...pizzasCart]
            for (let i = 0; i < updatedCounters.length; i++) {
                if (updatedCounters[i].index === pizzaIndex) {
                    updatedCounters[i].count++
                }
            }
            setPizzasCart(updatedCounters)
        }
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
                <div className="price">{pizza.price}грн</div>
                <button className="btn" onClick={() => addToCart(pizza)}>Додати до кошика</button>
            </div>
            )}
        </div>
    )
}