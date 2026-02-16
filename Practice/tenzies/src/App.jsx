import './App.css'
import Die from "/Users/cmvinayak/Documents/Design Engineering/Practice/tenzies/src/components/die.jsx"
import {nanoid} from "nanoid";
import { useState } from 'react';

export default function App() {

  const [dice, setDice] = useState(() => generateRandomDice())

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
    />
  )

  return (
    <>
      <main>
        <div className='die-container'>
            {diceElements}
        </div>
      </main>
    </>
  )
}


