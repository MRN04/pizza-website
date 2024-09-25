import { useAtom } from "jotai"
import "./pizza-constructor.css"
import { isOpenModal } from "../../store/atoms"

const ingredients = [
    {
        name: "Курка",
        price: 0,
        index: "1",
    },
    {
        name: "Моцарела",
        price: 0,
        index: "2",
    },
    {
        name: "Груша",
        price: 0,
        index: "3",
    },
    {
        name: "Індичка",
        price: 0,
        index: "4",
    },
    {
        name: "Крем-сир Філадельфія",
        price: 0,
        index: "5",
    },
    {
        name: "Ковбаски баварські",
        price: 0,
        index: "6",
    },
    {
        name: "Гриби",
        price: 0,
        index: "7",
    },
    {
        name: "Цибуля",
        price: 0,
        index: "8",
    },
    {
        name: "Кукурудза",
        price: 0,
        index: "9",
    },
    {
        name: "Пепероні",
        price: 0,
        index: "10",
    },
    {
        name: "Помідори",
        price: 0,
        index: "11",
    },
    {
        name: "Шинка",
        price: 0,
        index: "12",
    },
    {
        name: "Бекон",
        price: 0,
        index: "13",
    },
    {
        name: "Огірки мариновані",
        price: 0,
        index: "14",
    },
    {
        name: "Бергадер Блю",
        price: 0,
        index: "15",
    },
    {
        name: "Фета",
        price: 0,
        index: "16",
    },
    {
        name: "Шпинат",
        price: 0,
        index: "17",
    },
]



export function AddNewPizzaModal() {

    const [isModalOpen, setIsModalOpen] = useAtom(isOpenModal)

    function closeModal () {
        setIsModalOpen(!isModalOpen)
        document.body.classList.remove("overflow-hidden")
    }

    return(
        <div className="wrap" onClick={closeModal}>
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                <h3>Створіть власну піцу!</h3>
                <form>
                    <input type="text" placeholder="Назва піци"/>
                    <input type="text" placeholder="Посилання на картинку"/>
                    <div className="ingredients">
                        <h4>Начинка</h4>
                        <div className="checkboxes">
                            {ingredients.map((ingredient, index) => 
                            <div key={index} className="ingredient">
                                <input type="checkbox" id={ingredient.index} />
                                <label htmlFor={ingredient.index}>{ingredient.name}</label>
                            </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}