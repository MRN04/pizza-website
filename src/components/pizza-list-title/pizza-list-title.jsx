import { useAtom } from "jotai";
import "./pizza-list-title.css"
import { useState } from "react";
import { allPizzas, searchFilterValue } from "../../store/atoms";

export function PizzaListTitle() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [pizzas, setPizzas] = useAtom(allPizzas);
    const [searchFilter, setSearchFilter] = useAtom(searchFilterValue)

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

    function getValue(el) {
        setSearchFilter(el.target.value)
        setPizzas(allPizzas.init)
    }

    function nameFilter() {
        const filteredPizzas = [...pizzas].filter(pizza => pizza.ingredients.toLowerCase().includes(searchFilter.toLowerCase()))
        setPizzas(filteredPizzas)
    }

    function resetSort() {
        setPizzas(allPizzas.init)   
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
                    <input type="text" placeholder="Пошук за інградієнтами" onChange={(el) => getValue(el)}/>
                    <button className="btn" onClick={nameFilter}>Шукати</button>
                </div>
                <button className="btn" onClick={resetSort}>Скинути</button>
            </div>}
        </div>
    )
}