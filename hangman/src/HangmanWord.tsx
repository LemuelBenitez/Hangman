
type HangmanWordProps = {
    guessedLetter: string[];
    wordToGuess: string;
};
export default function HangmanWord({ guessedLetter, wordToGuess }: HangmanWordProps) {
 return(
<div style={{
    fontSize: "6rem",
    fontFamily: "monospace",
    display: "flex",
    gap: ".25em",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: "2rem",
    color: "#3b82f6"
}}>
{wordToGuess.split("").map((letter, index) => (
    <span style={{ borderBottom: ".1em solid black" }} key={index}>
        {guessedLetter.includes(letter) ? letter : "_"}
    </span>
))}
</div>
 )

}