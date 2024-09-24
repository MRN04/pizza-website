import { useState } from "react"
import { allPizzas, pizzaAtom, samePizzasAmount } from "../../store/atoms"
import { useAtom } from "jotai"
import "./pizzas-list.css"



export function PizzasList() {
    const [pizzas, setPizzas] = useAtom(allPizzas)
    const [pizzasCart, setPizzasCart] = useAtom(pizzaAtom)
    const [samePizzas, setSamePizzasAmount] = useAtom(samePizzasAmount)
    
    function addToCart(pizza) {
        const updatedCartList = [...pizzasCart, pizza]
        setPizzasCart(updatedCartList)
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