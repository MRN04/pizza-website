import { useAtomValue } from "jotai"

export function CreatePizzaModal({isOpen}) {
    

    const closeModal = () => {

    }
    
    return (
        <>
            <button className="btn" onClick={() => {}}>Додати власну піцу</button>
            {isOpen &&
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
            }
        </>
    )
}