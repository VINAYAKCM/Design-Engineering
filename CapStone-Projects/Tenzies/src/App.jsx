import './App.css'
import Die from "../src/components/Die.jsx"
import React from "react"
import {nanoid} from "nanoid"

export default function App() {

  //States
  const [dieValue, setDieValue] = React.useState(generateAllNewDice())
  
  //Generating random dice values
  function generateAllNewDice(){
    const newDice = []
    for (let i = 1; i <= 10; i = i+1){
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      newDice.push({value: randomNumber, 
                    isHeld: false,
                    id: nanoid()})
    }
    return newDice;
    }

    //Displaying Dice value on the button with properties
    const diceElements = dieValue.map(dieObj => 
      <Die 
        key={dieObj.id}
        value={dieObj.value} 
        isHeld={dieObj.isHeld}
        hold={hold}
        id={dieObj.id}
      />)
  
   //Generate new random values for each die button based on its isHeld value
    function rollDice(){
      setDieValue(oldDice =>
        oldDice.map(die => {
          return die.isHeld  
            ? die
            : {...die, value: Math.floor(Math.random() * 6) + 1}
      })) 
    }

    //Toggle diceValue on/off based on matching id
    function hold(id){
      setDieValue(oldDice => 
        oldDice.map(die => {
          return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })) 
    }

  return (
    <>
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className="die-container">
            {diceElements}
        </div>
        <button className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      </main>
    </>
  )
}



 
