export function ChangePizzaModal({pizza}) {
    
    
    
    return (
        <>
            <button className="edit-user-pizza-btn" onClick={() => changePizza(pizza)}></button>
            {isOpen &&
            <div className="wrap">
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
            }
        </>
    )
}