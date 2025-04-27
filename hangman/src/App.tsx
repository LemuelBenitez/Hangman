import React, { useEffect } from 'react';
import { useState } from 'react';
import words from "./wordList.json"
import  HangmanDrawing  from './HangmanDrawing';
import HangmanWord  from './HangmanWord';
import HangmanKeyboard  from './HangmanKeyboard';


function App() {
const [wordToGuess, setWordToGuess] = useState<string>(()=>{
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();})
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
const [won, setWon] = useState<boolean>(false);
const [lost, setLost] = useState<boolean>(false);

const incorrectLetters = guessedLetters.filter(
  (letter) => !wordToGuess.includes(letter)
);

useEffect(() => {
  const handleKeydown = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase();
    if (guessedLetters.includes(letter) || !letter.match(/^[A-Z]$/)) return;
    setGuessedLetters((prev) => [...prev, letter]);   
  };
  document.addEventListener("keypress", handleKeydown);    

  if (wordToGuess.split("").every((letter) => guessedLetters.includes(letter))) {
    setWon(true);
  }
  if (incorrectLetters.length >= 6) {
    setLost(true);
  }
  return () => {
    document.removeEventListener("keypress", handleKeydown);
  };
}, [guessedLetters]);


  return (
    < div 
    style={{ 
    display: "flex", 
    gap: "2rem",
    flexDirection: "column", 
    alignItems: "center", 
    margin: "0 auto",
    height: "100vh" }}>
   <div style={{ fontSize: "2rem", textAlign: "center" }}>
      <h1>Let's Play Hangman !</h1>
      {lost && 
      <h2 style={{ color: "red" }}>
         "You Lost! 😢"
        </h2>}
        {won &&
        <h2 style={{ color: "green" }}>
         "You Won! 🎉"
        </h2> }
      <HangmanDrawing numberOfGuessess={incorrectLetters.length} />
      <HangmanWord  guessedLetter={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"
      }}>
        { !(won || lost) &&
         <HangmanKeyboard  
         activeLetters={guessedLetters}
         inactiveLetters={incorrectLetters}
         addGuessedLetter={setGuessedLetters}
         />
        }
        { (won || lost) &&
        <div style={{display: "flex", gap: "2rem", flexDirection: "column", alignItems: "center"}}>
          <h2 style={{ color: "black" }}>
            The word was: {wordToGuess}
          </h2>
          <button 
           style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#45a049",
            }
          }}
          onClick={() => {
            setGuessedLetters([]);
            setWordToGuess(words[Math.floor(Math.random() * words.length)].toUpperCase());
            setWon(false);
            setLost(false);
          }}>Play Again</button>    
      </div>
     } 
      </div>
    </div>
    </div>
  )
}

export default App
