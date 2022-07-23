import React, { useState } from "react";
function App() {
    const [turn, setTurn] = useState(0);
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
                <div className="grid"></div>
            </div>
        </div>
    );
}

export default App;
