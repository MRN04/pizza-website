import { useAtom } from "jotai"
import "../css/pizza-constructor.css"
import { isOpenModal, userPizzaInitial, userPizzasInitial, isPizzaToChange, isPizzaToAdd, pizzaToChangeInitial } from "../store/atoms"
import { useState } from "react"





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


}