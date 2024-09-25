import { PizzasList } from '../components/pizzas-list/pizzas-list'
import { Header } from '../components/header/header'
import { PizzaListTitle } from '../components/pizza-list-title/pizza-list-title'
import { PizzaConstructorTitle } from '../components/pizza-constructor-header/pizza-constructor-title'
import { PizzaConstructor } from '../components/pizza-constructor/pizza-constructor'

export function MorePizzas() {
  
  return (
      <div>
        <Header />
        <PizzaConstructorTitle />
        <PizzaConstructor />
      </div>
  )
}
