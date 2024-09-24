import { useAtom } from "jotai";
import { pizzaAtom } from "../../store/atoms"
import { useMemo, useState } from "react";
import logo from "../../assets/logo.png"
import "./header.css"

export function Header() {
    const [pizzas, setPizzas] = useAtom(pizzaAtom)
    
    const sum = useMemo(() => pizzas.reduce((acc, pizza) => acc + pizza.price,0), [pizzas])
    
    
    function openCart(btn) {
        btn.target.nextSibling.classList.toggle("show")
    }

    function removePizza(pizza) {
        const updatedPizzasList = pizzas.filter(item => item !== pizza)
        setPizzas(updatedPizzasList)
    }

    function clearPizzas() {
        setPizzas([])
    }
    
    return(
        <header className="header">
            <img src={logo} className="logo"/>
            <button className="open-cart-btn" onClick={openCart}><span className="pizza-counter">{pizzas.length}</span></button>
            <div className="cart">
                <div className="options">
                    {pizzas.map((pizza, index) => 
                    <div key={index} className="option">
                        <div className="pizza-info">
                            <h3 className="pizza-name">{pizza.name}</h3>
                            <p className="price">{pizza.price}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removePizza(pizza)}></button>
                    </div>
                    )}
                </div>
                <div className="order">
                    <div className="sum">
                        <p>Сума</p>
                        <span className="price"><b>{sum} грн</b></span>
                    </div>
                    <div className="btn-row">
                        <button className="btn">Замовити</button>
                        <button className="btn" onClick={clearPizzas}>Очистити</button>
                    </div>
                </div>
            </div>
        </header>
    )
}