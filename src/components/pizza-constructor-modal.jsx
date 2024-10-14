import { useAtom } from "jotai"
import "../css/pizza-constructor.css"
import { isOpenModal, userPizzaInitial, userPizzasInitial, isPizzaToChange, isPizzaToAdd, pizzaToChangeInitial } from "../store/atoms"
import { useRef, useState } from "react"

const ingredients = [
    {
        name: "Курка",
        price: 10,
        index: "1",
    },
    {
        name: "Моцарела",
        price: 10,
        index: "2",
    },
    {
        name: "Груша",
        price: 10,
        index: "3",
    },
    {
        name: "Індичка",
        price: 10,
        index: "4",
    },
    {
        name: "Крем-сир Філадельфія",
        price: 10,
        index: "5",
    },
    {
        name: "Ковбаски баварські",
        price: 10,
        index: "6",
    },
    {
        name: "Гриби",
        price: 10,
        index: "7",
    },
    {
        name: "Цибуля",
        price: 10,
        index: "8",
    },
    {
        name: "Кукурудза",
        price: 10,
        index: "9",
    },
    {
        name: "Пепероні",
        price: 10,
        index: "10",
    },
    {
        name: "Помідори",
        price: 10,
        index: "11",
    },
    {
        name: "Шинка",
        price: 10,
        index: "12",
    },
    {
        name: "Бекон",
        price: 10,
        index: "13",
    },
    {
        name: "Огірки мариновані",
        price: 10,
        index: "14",
    },
    {
        name: "Бергадер Блю",
        price: 10,
        index: "15",
    },
    {
        name: "Фета",
        price: 10,
        index: "16",
    },
    {
        name: "Шпинат",
        price: 10,
        index: "17",
    },
]



export function AddNewPizzaModal() {

    const [isModalOpen, setIsModalOpen] = useAtom(isOpenModal)
    const [userPizza, setUserPizza] = useAtom(userPizzaInitial)
    const [userPizzas, setUserPizzas] = useAtom(userPizzasInitial)
    const [isChange, setIsChange] = useAtom(isPizzaToChange)
    const [isAdd, setIsAdd] = useAtom(isPizzaToAdd)
    const [pizzaToChange, setPizzaToChange] = useAtom(pizzaToChangeInitial)
    const [isFormFilled, setIsFormFilled] = useState({
        name: false,
        img: false,
    })
    
    function closeModal () {
        setIsAdd(!isAdd)
        setIsModalOpen(!isModalOpen)
        document.body.classList.remove("overflow-hidden")
    }

    function closeChangeModal() {
        setIsChange(!isChange)
        setIsModalOpen(!isModalOpen)
        document.body.classList.remove("overflow-hidden")
    }

    function handleNameChanges(el) {
        const updatedObject = {...userPizza}
        updatedObject.name = el.target.value
        updatedObject.index = userPizzas.length + 1
        setUserPizza(updatedObject)
        
        if (el.target.value != "") {
            const nameState = {...isFormFilled}
            nameState.name = true
            setIsFormFilled(nameState)
        }
        else {
            const nameState = {...isFormFilled}
            nameState.name = false
            setIsFormFilled(nameState)
        }
    }

    function handleImgChanges(el) {
        const updatedObject = {...userPizza}
        updatedObject.img = el.target.value
        setUserPizza(updatedObject)

        if (el.target.value != "") {
            const imgState = {...isFormFilled}
            imgState.img = true
            setIsFormFilled(imgState)
        }
        else {
            const imgState = {...isFormFilled}
            imgState.img = false
            setIsFormFilled(imgState)
        }
    }

    function handleIngredientsChanges(el, name, price) {
        const updatedObject = {...userPizza}

        if (el.target.checked) {
            updatedObject.ingredientsArr = [...updatedObject.ingredientsArr, name]
            updatedObject.ingredients = updatedObject.ingredientsArr.join(", ")
            updatedObject.price += price
            setUserPizza(updatedObject)
        }
        else {
            updatedObject.ingredientsArr = updatedObject.ingredientsArr.filter(word => word != name)
            updatedObject.ingredients = updatedObject.ingredientsArr.join(", ")
            updatedObject.price -= price
            setUserPizza(updatedObject)
        }
    }

    function addUserPizza() {
        if (isFormFilled.name == true && isFormFilled.img == true) {
            const updatedUserPizzas = [...userPizzas, userPizza]
            localStorage.setItem("savedUserPizzas", JSON.stringify(updatedUserPizzas))
            setUserPizzas(updatedUserPizzas)
            setUserPizza({
                name: "",
                price: 100.00,
                img: "",
                ingredients: "",
                ingredientsArr: [],
                index : 0,
                count: 0,
            })
            closeModal()
        }
        else {
            alert("Заповніть форму")
        }
    }


    function changeName(el) {
        const updatedObject = {...pizzaToChange}
        updatedObject.name = el.target.value
        setPizzaToChange(updatedObject)
        
        if (el.target.value != "") {
            const nameState = {...isFormFilled}
            nameState.name = true
            setIsFormFilled(nameState)
        }
        else {
            const nameState = {...isFormFilled}
            nameState.name = false
            setIsFormFilled(nameState)
        }
    }

    function changeImg(el) {
        const updatedObject = {...pizzaToChange}
        updatedObject.img = el.target.value
        setPizzaToChange(updatedObject)

        if (el.target.value != "") {
            const imgState = {...isFormFilled}
            imgState.img = true
            setIsFormFilled(imgState)
        }
        else {
            const imgState = {...isFormFilled}
            imgState.img = false
            setIsFormFilled(imgState)
        }
    }

    function changeIngredients(el, name, price) {
        const updatedObject = {...pizzaToChange}
        
        if (el.target.checked) {
            updatedObject.ingredientsArr = [...updatedObject.ingredientsArr, name]
            updatedObject.ingredients = updatedObject.ingredientsArr.join(", ")
            updatedObject.price += price
            setPizzaToChange(updatedObject)
        }
        else {
            updatedObject.ingredientsArr = updatedObject.ingredientsArr.filter(word => word != name)
            updatedObject.ingredients = updatedObject.ingredientsArr.join(", ")
            updatedObject.price -= price
            setPizzaToChange(updatedObject)
        }
    }

    function isChecked(name) {
        if (pizzaToChange.ingredientsArr.includes(name)) {
            return (true)
        }
        else {
            return (false)
        }
    }


    function changeUserPizza() {
        const updatedPizza = {...pizzaToChange}
        for (let i = 0; i < userPizzas.length; i++) {
            if (userPizzas[i].index === pizzaToChange.index) {
                userPizzas[i] = updatedPizza
                const savedUserPizzas = JSON.parse(localStorage.getItem("savedUserPizzas"))
                savedUserPizzas[i] = updatedPizza
                localStorage.setItem("savedUserPizzas", JSON.stringify(savedUserPizzas))
            }
        }

        setPizzaToChange({
            name: "",
            price: 100.00,
            img: "",
            ingredients: "",
            ingredientsArr: [],
            index : 0,
            count: 0,
        })
        closeChangeModal()
    }

    if (isAdd === true) {
        return(
            <div className="wrap" onClick={closeModal}>
                <div className="modal" onClick={(event) => event.stopPropagation()}>
                    <button className="close-modal-btn" onClick={closeChangeModal}></button>
                    <h3>Створіть власну піцу!</h3>
                    <form>
                        <input type="text" placeholder="Назва піци" onChange={(el) => handleNameChanges(el)}/>
                        <input type="text" placeholder="Посилання на картинку" onChange={(el) => handleImgChanges(el)}/>
                        <div className="ingredients">
                            <h4>Начинка</h4>
                            <div className="checkboxes">
                                {ingredients.map((ingredient, index) => 
                                <div key={index} className="ingredient">
                                    <div className="checkbox-field">
                                        <input type="checkbox" id={ingredient.index} onChange={(el) => handleIngredientsChanges(el, ingredient.name, ingredient.price)}/>
                                        <label htmlFor={ingredient.index}>{ingredient.name}</label>
                                    </div>
                                    <div className="price">{ingredient.price}грн</div>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className="btn" onClick={addUserPizza}>Створити</div>
                    </form>
                </div>
            </div>
        )
    }

    else if (isChange === true) {
        return(
            <div className="wrap" onClick={closeChangeModal}>
                <div className="modal" onClick={(event) => event.stopPropagation()}>
                    <button className="close-modal-btn" onClick={closeChangeModal}></button>
                    <h3>Змінити піцу</h3>
                    <form>
                        <input type="text" placeholder="Назва піци" defaultValue={pizzaToChange.name} onChange={(el) => changeName(el)}/>
                        <input type="text" placeholder="Посилання на картинку" defaultValue={pizzaToChange.img} onChange={(el) => changeImg(el)}/>
                        <div className="ingredients">
                            <h4>Начинка</h4>
                            <div className="checkboxes">
                                {ingredients.map((ingredient, index) => 
                                <div key={index} className="ingredient">
                                    <div className="checkbox-field">
                                        <input type="checkbox" checked={isChecked(ingredient.name)} id={ingredient.index} onChange={(el) => changeIngredients(el, ingredient.name, ingredient.price)}/>
                                        <label htmlFor={ingredient.index}>{ingredient.name}</label>
                                    </div>
                                    <div className="price">{ingredient.price}грн</div>
                                </div>
                                )}
                            </div>
                        </div>
                        <button type="submit" className="btn" onClick={changeUserPizza}>Змінити</button>
                    </form>
                </div>
            </div>
        )
    }
}