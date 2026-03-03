import { useState } from 'react'
import './App.css'
import Game from './components/Game'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <h1>WELCOME TO ROCK, PAPER, SCISSORS GAME</h1>
      <Game/>
    </div>
  )
}

export default App
