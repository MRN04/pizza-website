import { useAtom, useAtomValue } from "jotai";
import "../css/pizza-list-title.css"
import { useState } from "react";
import { allPizzas, pizzasCopy, searchFilterValue } from "../store/atoms";
//import { useQuery } from "@tanstack/react-query";
//import { useEffect } from "react";

//reg

export function PizzaListTitle() {
    
    const [pizzas, setPizzas] = useAtom(allPizzas)
    const [isOpen, setIsOpen] = useState(false);
    const [searchFilter, setSearchFilter] = useAtom(searchFilterValue)  
    const [allPizzasCopy, setAllPizzasCopy] = useAtom(pizzasCopy)

    function showFilters() {
        setIsOpen(!isOpen);
    }

    function priceSortByGrowth() {
        const sortedPizzasByGrowth = [...pizzas].sort((a, b) => a.price - b.price);
        setPizzas(sortedPizzasByGrowth);
    }

    function priceSortByDescent() {
        const sortedPizzasByDescent = [...pizzas].sort((a, b) => b.price - a.price);
        setPizzas(sortedPizzasByDescent);     
    }

    const ingredientsFilter = (el) => {
        const value = el.target.value
        if (value === "") {
            setPizzas(allPizzasCopy)
        }
        else {
            const filteredPizzas = [...allPizzasCopy].filter(pizza => pizza.ingredients.toLowerCase().includes(value))
            setPizzas(filteredPizzas)
            console.log(filteredPizzas);
        }
    }

    //function nameFilter() {
    //    const filteredPizzas = [...pizzas].filter(pizza => pizza.ingredients.toLowerCase().includes(searchFilter.toLowerCase()))
    //    setPizzas(filteredPizzas)
    //}

    function resetSort() {
        setPizzas(allPizzasCopy)
    }

    return (
        <div className="pizza-list-title">
            <div className="title">
                <h2>Our Pizzas</h2>
                <button className="btn" onClick={showFilters}>Filters</button>
            </div>
            {isOpen &&  
            <div className="filters-menu">
                <div className="price">
                    <button className="btn" onClick={priceSortByGrowth}>Сортувати за зростанням ціни</button>
                    <button className="btn" onClick={priceSortByDescent}>Сортувати за спаданням ціни</button>
                </div>
                <div className="name-filter">
                    <input type="text" placeholder="Пошук за інградієнтами" onChange={(el) => ingredientsFilter(el)}/>
                    <button className="btn">Шукати</button>
                </div>
                <button className="btn" onClick={resetSort}>Скинути</button>
            </div>}
        </div>
    )
}