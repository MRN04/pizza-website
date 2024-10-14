import { allPizzas, pizzaAtom } from "../store/atoms"
import { useAtom } from "jotai"
import "../css/pizzas-list.css"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { Spinner } from "./spinner"



export function PizzasList() {

    const query = useQuery({ queryKey: ["pizzas"], queryFn: async () => {
        const response = await fetch("http://localhost:5000/data")
        const data = await response.json()
        return data
    }})

    const queryUsers = useQuery({ queryKey: ["users"], queryFn: async () => {
        const response = await fetch("http://localhost:5000/users")
        const data = await response.json()
        return data
    }})
    
    const [pizzas, setPizzas] = useAtom(allPizzas)
    const [pizzasCart, setPizzasCart] = useAtom(pizzaAtom)
    
    useEffect(() => {
        if(query.data) {
            setPizzas(query.data)
        }
    }, [query.data])

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

    if (query.isLoading === true) {
        return (
            <Spinner />
        )
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