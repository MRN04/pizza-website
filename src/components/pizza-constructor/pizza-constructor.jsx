import "./pizza-constructor.css"
import { userPizzasInitial, pizzaAtom, isOpenModal } from "../../store/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
import { AddNewPizzaModal } from "./pizza-constructor-modal"

export function PizzaConstructor() {
    
    const [userPizzas, setUserPizzas] = useAtom(userPizzasInitial)
    const [pizzasCart, setPizzasCart] = useAtom(pizzaAtom)
    const [isModalOpen, setIsModalOpen] = useAtom(isOpenModal)
    
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

    function showCreatePizzaModal() {
        setIsModalOpen(!isModalOpen)
        document.body.classList.add("overflow-hidden")
    }

    function deleteUserPizza(pizza) {
        const updatedUserPizzas = userPizzas.filter(item => item !== pizza)
        setUserPizzas(updatedUserPizzas)
    }

    if (userPizzas.length === 0) {
        return (
            <div className="no-user-pizzas">
                <h3>У вас ще немає власно створених піц</h3>
                <p>Якщоо хочете спробувати незвичне поєднання інградієнтів, створіть власну піцу прямо зараз</p>
                <button className="btn" onClick={showCreatePizzaModal}>Створити</button>
                {isModalOpen && 
                <AddNewPizzaModal />
                }
            </div>
        )
    }
    else {
        return (
            <div className="user-pizzas">
                <div className="add-pizza-field">
                    <button className="btn" onClick={showCreatePizzaModal}>Додати власну піцу</button>
                </div>
                <div className="user-pizzas-list">
                {userPizzas.map((pizza, index) => 
                    <div key={index} className="user-pizza-card">
                        <img src={pizza.img}/>
                        <div className="txt">
                            <h3>{pizza.name}</h3>
                            <p>{pizza.ingredients}</p>
                        </div>
                        <div className="price">{pizza.price}грн</div>
                        <button className="btn" onClick={() => addToCart(pizza)}>Додати до кошика</button>
                        <div className="change-field">
                            <button className="edit-user-pizza-btn"></button>
                            <button className="delete-user-pizza-btn" onClick={() => deleteUserPizza(pizza)}></button>
                        </div>
                    </div>)}
                </div>
                {isModalOpen && 
                <AddNewPizzaModal />
                }
            </div>
        )
    }
}