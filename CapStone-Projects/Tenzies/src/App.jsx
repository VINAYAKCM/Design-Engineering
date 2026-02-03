import './App.css'
import Die from "../src/components/Die.jsx"
import React from "react"

export default function App() {

  const [dieValue, setDieValue] = React.useState(generateAllNewDice())
  
  function generateAllNewDice(){
    const newDice = []
    for (let i = 1; i <= 10; i = i+1){
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      newDice.push(randomNumber)
    }
    return newDice;
    }
  
  const diceElements = dieValue.map(num => <Die value={num}/>)

  return (
    <>
      <main>
        <div className="die-container">
            {diceElements}
        </div>
      </main>
    </>
  )
}



 
