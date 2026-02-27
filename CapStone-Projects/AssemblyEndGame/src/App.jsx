import { useState } from 'react'
import './App.css'
import { languages } from '../languages'
import clsx from "clsx"

export default function App() {

    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetter, setGuessedLetter] = useState([])
    console.log(guessedLetter)

    //letter guess function
    function addGuessedLetter(letter) {
        setGuessedLetter(prevLetters => 
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        )
    }

    //Keyboard:
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetter.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            //Add class "correct" if isCorrect is true
            correct: isCorrect,
            //Add class "wrong" if isWrong is true
            wrong: isWrong
    })
    
    console.log(className)
    return (
        <button
            key={letter}
            onClick={() => addGuessedLetter(letter)}
            className={className}
        >
            {letter.toUpperCase()}
        </button>
    )
})

    //Display Guess Word
    const letterElements = currentWord.split("").map((letter, index) => (
                        <span className="letter" key={index}>
                                {guessedLetter.includes(letter) ? letter.toUpperCase() : ""}
                        </span>
                    ))
    
    //Word Status
    const state = true
    const styles = {backgroundColor: state ? 'green' : 'red'}

    return (
      <>
      <main>
          <header>
              <h1>Assembly: End Game</h1>
              <p>Guess the word within 8 attempts to keep the 
                  programming world safe from Assembly!</p>
          </header>

          <section className="status" style={styles}>
              <h3>{state ? "GAME WON!" : "Game over!"}</h3>
          </section>
          <section className='languages'>
              {languages.map(lang => (
                  <div className='lang' 
                       style={{backgroundColor: lang.backgroundColor, color: lang.color}}
                       key={lang.name}
                                      >{lang.name}
                  </div>
              ))}
          </section>

          <section className="word">
                {letterElements}
         </section>

         <section className='keyboard' >
                    {keyboardElements}
         </section>

         <button className="new-game">New Game</button>


      </main>
      </>
    )
}


