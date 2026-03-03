import { useState, useEffect } from 'react'
import './Game.css'

const game = () => {
  const [Choice1, setChoice1] = useState("")
  const [Choice2, setChoice2] = useState("")

  const [Score1, setScore1] = useState(0)
  const [Score2, setScore2] = useState(0)

  const [winner, setWinner] = useState("")

  const Choice = () => {
    let Random = Math.floor(Math.random() * 3 + 1)
    if (Random === 1) {
      setChoice2("Rock")
    }
    else if (Random === 2) {
      setChoice2("Paper")
    }
    else {
      setChoice2("Scissor")
    }
  }

  const Score = () => {
    if (Choice1 === "Rock" && Choice2 === "Paper") {
      setScore2(count => count + 1)
    }
    else if (Choice1 === "Rock" && Choice2 === "Scissor") {
      setScore1(count => count + 1)
    }
    else if (Choice1 === "Paper" && Choice2 === "Rock") {
      setScore1(count => count + 1)
    }
    else if (Choice1 === "Paper" && Choice2 === "Scissor") {
      setScore2(count => count + 1)
    }
    else if (Choice1 === "Scissor" && Choice2 === "Paper") {
      setScore1(count => count + 1)
    }
    else if (Choice1 === "Scissor" && Choice2 === "Rock") {
      setScore2(count => count + 1)
    }
  }

  const resetGame = () => {
    setChoice1("")
    setChoice2("")
    setScore1(0)
    setScore2(0)
  }

  useEffect(() => {
    if (Choice1 && Choice2) {
      Score()
      setWinner("")
    }
  }, [Choice1, Choice2])

  useEffect(() => {
    if (Score1 === 5) {
      setWinner("USER Won The Game !!")
      resetGame()
    }

    if (Score2 === 5) {
      setWinner("Computer Won The Game !!")
      resetGame()

    }
  }, [Score1, Score2])

  return (
    <div className='game'>
      <div className="btns">
        <button onClick={() => { Choice(), setChoice1("Rock") }}>Rock</button>
        <button onClick={() => { Choice(), setChoice1("Paper") }}>Paper</button>
        <button onClick={() => { Choice(), setChoice1("Scissor") }}>Scissor</button>
      </div>
      <div className="choice">
        <div>Your Choice : {Choice1}</div>
        <div>Computer Choice : {Choice2}</div>
      </div>
      <div className="score">
        <div>Your Score : {Score1}</div>
        <div>Computer Score : {Score2}</div>
      </div>

      {winner && <h2 className="winner">{winner}</h2>}
      <button onClick={() =>{ resetGame(); setWinner("")}}>Restart</button>
    </div>
  )
}

export default game
