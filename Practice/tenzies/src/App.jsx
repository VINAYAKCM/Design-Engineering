import './App.css'
import Die from "/Users/cmvinayak/Documents/Design Engineering/Practice/tenzies/src/components/die.jsx"
import {nanoid} from "nanoid";
import { useState } from 'react';
import Confetti from "react-confetti"

export default function App() {

  const [dice, setDice] = useState(() => generateRandomDice())

  const gameWon = dice.every(die => die.isHeld) && 
        dice.every(die => die.value === dice[0].value)
    

  function generateRandomDice(){
    const dieValues = []
    for (let i = 1; i <= 10; i = i+1){
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      dieValues.push({value:randomNumber, 
                isHeld:false,
                id: nanoid()
      })
      }
      return dieValues
  }

  const diceElements = dice.map(die => 
    <Die key={die.id}
         value={die.value}
         isHeld={die.isHeld}
         id={die.id} 
         holdDice={holdDice}
    />
  )

  function rollDice(){
    if (!gameWon) {
          setDice(prevDice => prevDice.map(die => {
          return die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1}
    }))
        }
        else {
            setDice(generateRandomDice())
        }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='die-container'>
            {diceElements}
        </div>
        <button className='roll-btn' onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  )
}


