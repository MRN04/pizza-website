import { useAtom } from "jotai";
import { pizzaAtom } from "../store/atoms"
import { useEffect, useMemo, useRef, useState } from "react";
import logo from "../assets/logo.png"
import "../css/header.css"
import { json, Link } from "react-router-dom";
import { Registration } from "./registration";

export function Header() {
    

    const [pizzas, setPizzas] = useAtom(pizzaAtom)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
    const [burgerMenuTranslate, setBurgerMenuTranslate] = useState("350px")

    const sum = useMemo(() => pizzas.reduce((acc, pizza) => acc + (pizza.price * pizza.count),0), [pizzas])
    const saved = localStorage.getItem("cartListState")

    useEffect(() => { 
        const pizzas = JSON.parse(localStorage.getItem("cartListState"))
        if(pizzas) {
            setPizzas(pizzas)
        }
    }, [])

    useEffect(() => {
        setBurgerMenuTranslate(isBurgerMenuOpen ? "0px" : "350px")
    },[isBurgerMenuOpen])

    function openCart() {
        setIsCartOpen(!isCartOpen)
    }

    function openCartMobile() {
        setIsCartOpen(!isCartOpen)
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    function removePizza(pizza) {
        const updatedPizzasList = pizzas.filter(item => item !== pizza)
        setPizzas(updatedPizzasList)
        pizza.count = 0
        let savedPizzasInCart = JSON.parse(localStorage.getItem("cartListState"))
        for (let i = 0; i < savedPizzasInCart.length; i++) {
            if (savedPizzasInCart[i].index === pizza.index) {
                const updatedSavedPizzas = savedPizzasInCart.filter(item => item.index !== pizza.index)
                localStorage.setItem("cartListState", JSON.stringify(updatedSavedPizzas))                
            }
        }
    }

    function clearPizzas() {
        setPizzas([])
        for (let i = 0; i < pizzas.length; i++) {
            pizzas[i].count = 0
        }
        localStorage.removeItem("cartListState")
    }

    function reducePizzaAmount(pizza) {
        if (pizza.count === 1) {
            removePizza(pizza)
        }
        else {
            const pizzaIndex = pizza.index
            const updatedCounters = [...pizzas]
            for (let i = 0; i < updatedCounters.length; i++) {
                if (updatedCounters[i].index === pizzaIndex) {
                    updatedCounters[i].count--
                }
            }
            localStorage.setItem("cartListState", JSON.stringify(updatedCounters))
            setPizzas(updatedCounters)
        }
    }

    function increasePizzaAmount(pizza) {
        const pizzaIndex = pizza.index
        const updatedCounters = [...pizzas]
        for (let i = 0; i < updatedCounters.length; i++) {
            if (updatedCounters[i].index === pizzaIndex) {
                updatedCounters[i].count++
            }
        }
        localStorage.setItem("cartListState", JSON.stringify(updatedCounters))
        setPizzas(updatedCounters)
    }

    function toggleBurgerMenu() {
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }
  
    return(
        <header className="header">
            <img src={logo} className="logo"/>
            <nav className="desktop-nav">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/more-pizzas">Pizza constructor</Link></div>
                <div><Link to="/info">About us</Link></div>
            </nav>
            <div className="btn-row">
                <button className="open-cart-btn desktop-btn" onClick={openCart}><span className="pizza-counter">{pizzas.length}</span></button>
                {isCartOpen &&
                    <div className="cart">
                        <div className="close-btn" onClick={() => {setIsCartOpen(!isCartOpen)}}></div>
                        <div className="options">
                            {pizzas.map((pizza, index) => 
                            <div key={index} className="option">
                                <div className="pizza-info">
                                    <h3 className="pizza-name">{pizza.name}</h3>
                                    <p className="price">{pizza.price}</p>
                                </div>
                                <div className="change">
                                    <div className="pizza-amount">
                                        <button className="amount-btn" onClick={() => reducePizzaAmount(pizza)}>-</button>
                                        <span>{pizza.count}</span>
                                        <button className="amount-btn" onClick={() => increasePizzaAmount(pizza)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removePizza(pizza)}></button>
                                </div>
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
                }
                <Registration />
            </div>
            <button className="burger-btn" onClick={toggleBurgerMenu}></button>
            {isBurgerMenuOpen &&
            <div className="burger-menu" style={{ translate: burgerMenuTranslate }}>
                <nav className="mobile-nav">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/more-pizzas">Pizza constructor</Link></div>
                    <div><Link to="/info">About us</Link></div>
                </nav>
                <button className="open-cart-btn mobile-btn" onClick={openCartMobile}><span className="pizza-counter">{pizzas.length}</span></button>
            </div>
            }
        </header>
    )
}