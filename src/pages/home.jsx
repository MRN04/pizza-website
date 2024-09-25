import { PizzasList } from '../components/pizzas-list/pizzas-list'
import { Header } from '../components/header/header'
import { PizzaListTitle } from '../components/pizza-list-title/pizza-list-title'

export function Home() {
  
  return (
      <div>
        <Header />
        <PizzaListTitle />
        <PizzasList />  
      </div>
  )
}

