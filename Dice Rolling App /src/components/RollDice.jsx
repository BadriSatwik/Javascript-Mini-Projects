import { useState } from 'react'
import "./RollDice.css"
import Die from './Die'

const rolldice = () => {
  const [dice1, setdice1] = useState(1)
  const [dice2, setdice2] = useState(1)

  function Roll() {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    setdice1(random1)
    setdice2(random2)
  }

  return (
    <div>
      <Die no1={dice1} no2={dice2} />
      <div className='btn'>
        <button onClick={Roll}>ROll Dice !!</button>
      </div>
    </div>
  )
}

export default rolldice
