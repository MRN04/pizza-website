import "../css/pizza-constructor.css"
import { pizzaAtom, userPizzasInitial } from "../store/atoms"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { CreatePizzaModal } from "./CreatePizzaModal"
import { ChangePizzaModal } from "./ChangePizzaModal"

export function PizzaConstructor() {
    
    const [userPizzas, setUserPizzas] = useAtom(userPizzasInitial)
    const [pizzasCart, setPizzasCart] = useAtom(pizzaAtom)
    const [isCreatePizzaModalOpen, setIsCreatePizzaModalOpen] = useState(false)
    const [isChangePizzaModalOpen, setIsChangePizzaModalOpen] = useState(false)

    useEffect(() => { 
        const pizzas = JSON.parse(localStorage.getItem("savedUserPizzas"))
        if(pizzas) {
            setUserPizzas(pizzas)
        }
    }, [])
    
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
            const pizzasjson = JSON.stringify(updatedCartList);
            localStorage.setItem("cartListState", pizzasjson)
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
            const pizzasjson = JSON.stringify(updatedCounters);
            localStorage.setItem("cartListState", pizzasjson)
        }
    }

    const toggleCreatePizzaModal = () => {
        setIsCreatePizzaModalOpen(!isCreatePizzaModalOpen)
        document.body.classList.add("overflow-hidden")
    }

    const toggleChangePizzaModal = (pizza) => {
        setPizzaToChange(pizza)
        setIsChangePizzaModalOpen(!isChangePizzaModalOpen)
        document.body.classList.add("overflow-hidden")
    }

    function deleteUserPizza(pizza) {
        const updatedUserPizzas = userPizzas.filter(item => item !== pizza)
        localStorage.setItem("savedUserPizzas", JSON.stringify(updatedUserPizzas))
        setUserPizzas(updatedUserPizzas)
    }

    if (userPizzas.length === 0) {
        return (
            <div className="no-user-pizzas">
                <h3>У вас ще немає власно створених піц</h3>
                <p>Якщоо хочете спробувати незвичне поєднання інградієнтів, створіть власну піцу прямо зараз!</p>
                <CreatePizzaModal />
            </div>
        )
    }
    else {
        return (
            <div className="user-pizzas">
                <div className="add-pizza-field">
                    <CreatePizzaModal />
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
                            <ChangePizzaModal pizza={pizza} />
                            <button className="delete-user-pizza-btn" onClick={() => toggleChangePizzaModal(pizza)}></button>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}