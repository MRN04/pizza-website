import { atom } from "jotai"
import { useEffect } from "react"

export const allPizzas = atom([])
export const pizzaAtom = atom([])
export const samePizzasAmount = atom(0)
export const searchFilterValue = atom("")
export const userPizzasInitial = atom([])
export const isOpenModal =  atom(false)
export const userPizzaInitial = atom(
    {
        name: "",
        price: 100.00,
        img: "",
        ingredients: "",
        ingredientsArr: [],
        index : 0,
        count: 0,
    }
)
export const pizzaToChangeInitial = atom({})
export const isPizzaToChange = atom(false)
export const isPizzaToAdd = atom(false)


"https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-pieces.webp&w=480&q=75"