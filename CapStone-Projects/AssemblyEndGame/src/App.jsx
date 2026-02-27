import { useState } from 'react'
import './App.css'
import { languages } from '../languages'

export default function App() {

    const [currentWord, setCurrentWord] = useState("Blahblah")
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
    const keyboardElements = alphabet.split("").map((letter, index) => (
        <button key={letter}
                onClick={() => addGuessedLetter(letter)}
                    >{letter.toUpperCase()}
        </button>
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
                {currentWord.split("").map((letter, index) => (
                        <span className="letter" key={index}>
                                {letter.toUpperCase()}
                        </span>
                    ))}
         </section>

         <section className='keyboard' >
                    {keyboardElements}
         </section>

         <button className="new-game">New Game</button>


      </main>
      </>
    )
}


