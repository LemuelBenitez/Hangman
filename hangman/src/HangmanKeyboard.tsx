import React from 'react';
import styles from "./Keyboard.module.css"

type HangmanKeyboardProps = {
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: React.Dispatch<React.SetStateAction<string[]>>;
};

// The keys of the keyboard
const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


export default function HangmanKeyboard({activeLetters, inactiveLetters, addGuessedLetter}: HangmanKeyboardProps) {
    return (
    <div 
    style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "1rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontSize: "1.5rem",
        fontFamily: "monospace",
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        cursor: "pointer"}}> 
     {KEYS.map((key) => (
        <button
            key={key}
            className= {`${styles.btn}`}
             onClick={() => addGuessedLetter((prev) => [...prev,key])}
            disabled={activeLetters.includes(key) || inactiveLetters.includes(key)}
            // style={{
            //     padding: "1rem",
            //     border: "none",
            //     backgroundColor: "#4CAF50",
            //     color: "white",
            //     borderRadius: "5px",
            //     cursor: "pointer",
            //     transition: "background-color 0.3s ease",
            // }}
        >
            {key}
        </button>
    ))}
    </div>
    )
}