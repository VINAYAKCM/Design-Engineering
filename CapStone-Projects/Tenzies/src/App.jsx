import './App.css'
import Die from "../src/components/Die.jsx"
import { useState, useRef, useEffect } from "react"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

  //States
  const [dieValue, setDieValue] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null) //Allows to save values between render cycles without triggering a re-render itself

  const gameWon = dieValue.every(die => die.isHeld) && 
                    dieValue.every(die => die.value === dieValue[0].value)

  useEffect(()=> {
    if(gameWon){
      buttonRef.current.focus()
    }
  }, [gameWon])

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
      if(!gameWon){
        setDieValue(oldDice =>
          oldDice.map(die => {
            return die.isHeld  
              ? die
              : {...die, value: Math.floor(Math.random() * 6) + 1}
      }))}
      else{
        setDieValue(generateAllNewDice())
      }
        

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
        {gameWon && <Confetti/>}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className="die-container">
            {diceElements}
        </div>
        <button ref={buttonRef} className="roll-btn" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll" }
        </button>
        
      </main>
    </>
  )
}



 
