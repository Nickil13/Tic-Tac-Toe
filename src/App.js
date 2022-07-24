import React, { useState } from "react";
import Board from "./components/Board";

function App() {
    const [turn, setTurn] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const nextTurn = () => {
        if (turn === 0) {
            setTurn(1);
        } else {
            setTurn(0);
        }
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Tic Tac Toe</h1>
                <div className="player-info">
                    <div
                        className={`player-info__item ${
                            turn === 0 && "active"
                        }`}
                    >
                        <div className="circle"></div>
                        <h2>Player 1</h2>
                    </div>
                    <div
                        className={`player-info__item ${
                            turn === 1 && "active"
                        }`}
                    >
                        <div className="square"></div>
                        <h2>Player 2</h2>
                    </div>
                </div>
                <Board nextTurn={nextTurn} turn={turn} />
            </div>
        </div>
    );
}

export default App;
