import { PizzasList } from '../components/pizzas-list'
import { Header } from '../components/header'
import { PizzaListTitle } from '../components/pizza-list-title'

export function Home() {
  
  return (
      <div>
        <Header />
        <PizzaListTitle />
        <PizzasList />  
      </div>
  )
}

