import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/Counter'
import Todo from './features/Todos/Todo'

function App() {
  return (
    <>

      <div className="card">
        <Counter/>
        <Todo/>
      </div>
    </>
  )
}

export default App
