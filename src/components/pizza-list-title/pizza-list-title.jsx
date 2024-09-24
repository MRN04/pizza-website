import { useAtom } from "jotai";
import "./pizza-list-title.css"
import { useState } from "react";
import { allPizzas } from "../../store/atoms";

export function PizzaListTitle() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [pizzas, setPizzas] = useAtom(allPizzas);

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
                <button className="btn" onClick={resetSort}>Скинути</button>
            </div>}
        </div>
    )
}