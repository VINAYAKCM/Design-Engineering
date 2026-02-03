import './App.css'
import Die from "../src/components/Die.jsx"
import React from "react"

export default function App() {

  const [dieValue, setDieValue] = React.useState(generateAllNewDice())
  const diceElements = dieValue.map(num => <Die value={num}/>)
  
  function generateAllNewDice(){
    const newDice = []
    for (let i = 1; i <= 10; i = i+1){
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      newDice.push(randomNumber)
    }
    return newDice;
    }
  
  
    function rollDice(){
      setDieValue(generateAllNewDice()) //So setDieValue is literally a function you call when
                                        //you want to change the value of dieValue and generate
                                        //returns the new random array since the generateAllNewDice
                                        //returns as the output
    }


  return (
    <>
      <main>
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



 
