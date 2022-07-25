import React, { useEffect, useState } from "react";
import Tile from "./components/Tile";
import CelebrationModal from "./components/CelebrationModal";

function App() {
    const [turn, setTurn] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [modalShowing, setModalShowing] = useState(false);
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    useEffect(() => {
        if (modalShowing) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [modalShowing]);

    const nextTurn = () => {
        if (turn === 0) {
            setTurn(1);
        } else {
            setTurn(0);
        }
    };

    const resetBoard = () => {
        const emptyBoard = board.map(() => ["", "", ""]);
        setBoard(emptyBoard);
        if (turn === 1) {
            nextTurn();
        }
    };

    const isMatching = (list) => {
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] !== list[i + 1] || list[i] === "") {
                return false;
            }
        }
        return true;
    };

    const checkIfGameOver = () => {
        let gameOver = false;
        // If row
        for (let i = 0; i < board.length; i++) {
            if (isMatching(board[i])) {
                gameOver = true;
            }
        }

        // If column
        for (let i = 0; i < board.length; i++) {
            let list = [board[0][i], board[1][i], board[2][i]];
            if (isMatching(list)) {
                gameOver = true;
            }
        }

        // If diagonal
        let descendingDiag = [board[0][0], board[1][1], board[2][2]];
        let ascendingDiag = [board[2][0], board[1][1], board[0][2]];
        if (isMatching(descendingDiag) || isMatching(ascendingDiag)) {
            gameOver = true;
        }

        return gameOver;
    };

    const handleClickTile = (rowIndex, index) => {
        if (board[rowIndex][index] === "" && !isGameOver) {
            // Set the tile on the board
            let newBoard = board.map((row, i) => {
                if (i === rowIndex) {
                    if (turn === 0) {
                        row[index] = "c";
                    } else {
                        row[index] = "s";
                    }

                    return row;
                }
                return row;
            });

            setBoard(newBoard);

            const isGameOver = checkIfGameOver();
            if (isGameOver) {
                setModalShowing(true);
                setIsGameOver(true);
            } else {
                nextTurn();
            }
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

                <div className="board">
                    <button className="btn reset-btn" onClick={resetBoard}>
                        Reset Board
                    </button>
                    {board.map((row, rowIndex) => {
                        return (
                            <div key={rowIndex} className="row">
                                {row.map((tile, index) => {
                                    return (
                                        <Tile
                                            key={index}
                                            value={tile}
                                            onClick={() =>
                                                handleClickTile(rowIndex, index)
                                            }
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
            {modalShowing && (
                <CelebrationModal
                    turn={turn}
                    playAgain={() => {
                        setModalShowing(false);
                        setIsGameOver(false);
                        resetBoard();
                    }}
                />
            )}
        </div>
    );
}

export default App;
