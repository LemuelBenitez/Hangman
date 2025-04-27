type HangmanDrawingProps = {
    numberOfGuessess: number;
};
export default function HangmanDrawing({ numberOfGuessess }: HangmanDrawingProps) {
    return (
        <div style={{ position: "relative", marginLeft: "120px" }}>
            <div style={{ background: "black", height: "10px", width: "180px", marginLeft: "120px" }} />
            <div style={{
                background: "black", height: "100px", width: "10px", marginLeft: "290px",
                position: "absolute"
            }} />
            {numberOfGuessess > 0 &&
                <div>
                    {numberOfGuessess >= 1 &&
                        <div style={{
                            backgroundColor: "white", height: "70px", width: "70px", marginLeft: "250px",
                            marginTop: "100px", position: "absolute", borderRadius: "50%", border: "10px solid black"
                        }} />}
                    {numberOfGuessess >= 2 &&
                        <div style={{
                            background: "black", height: "130px", width: "10px", marginLeft: "290px",
                            marginTop: "180px", position: "absolute"
                        }} />
                    }
                    {numberOfGuessess >= 3 &&
                        <div style={{
                            background: "black", height: "80px", width: "10px", marginLeft: "330px",
                            marginTop: "170px", position: "absolute", rotate: "65deg"
                        }} />
                    }
                    {numberOfGuessess >= 4 &&
                        <div style={{
                            background: "black", height: "80px", width: "10px", marginLeft: "250px",
                            marginTop: "170px", position: "absolute", rotate: "-65deg"
                        }} />
                    }
                    {numberOfGuessess >= 5 &&
                        <div style={{
                            background: "black", height: "80px", width: "10px", marginLeft: "320px",
                            marginTop: "290px", position: "absolute", rotate: "135deg"
                        }} />
                    }
                    {numberOfGuessess >= 6 &&
                        <div style={{
                            background: "black", height: "80px", width: "10px", marginLeft: "260px",
                            marginTop: "290px", position: "absolute", rotate: "-135deg"
                        }} />
                    }
                    </div>
            }
                    <div
                        style={{
                            height: "400px",
                            width: "10px",
                            background: "black",
                            marginLeft: "120px"
                        }}
                    />
                    <div style={{ height: "10px", width: "250px", background: "black" }} />
                </div>
    );
}