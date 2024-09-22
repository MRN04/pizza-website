import { useState } from 'react'
import './App.css'
import { PizzasList } from './components/pizzas-list'
import { Header } from './components/header'
import { DraggableModal } from './components/modal'

function App() {
  
  return (
      <div className='App'>
        <Header />
        <PizzasList />  
        <DraggableModal />
      </div>
  )
}

export default App
