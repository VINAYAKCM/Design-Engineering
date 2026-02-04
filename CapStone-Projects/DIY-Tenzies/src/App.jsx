import { useState } from 'react'
import './App.css'
import Die from "../src/components/Die.jsx"
import {nanoid} from "nanoid"
//import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice())

  function generateAllNewDice(){
    const newDice = []
    
    for (let i = 1; i <= 10; i = i+1){
      const randomNumber = Math.floor(Math.random() * 6) + 1
      newDice.push({value:randomNumber,
                    id:nanoid(),
                    isHeld: false
      })
    }
    return newDice
  }

const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id}
         value={dieObj.value}
         isHeld={dieObj.isHeld}
         id={dieObj.id}
         hold={hold}
          /> 
  ));

function hold(id){
  setDice(oldDice => 
    oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    })
  )
}

function rollDice(){
  setDice(oldDice => 
    oldDice.map(die => 
      die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
    )
  );
}

  return (
    <>
      <main>
        <div className='die-container'>
          {diceElements}
        </div>
        <button className="roll-btn" onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}


