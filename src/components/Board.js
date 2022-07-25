import React, { useState } from "react";
import Tile from "./Tile";

export default function Board({ turn, nextTurn, setIsGameOver }) {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const isMatching = (list) => {
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] !== list[i + 1] || list[i] === "") {
                return false;
            }
        }
        return true;
    };
    const checkIfGameOver = () => {
        console.log("checking if game over");
        let gameOver = false;
        //If row
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
        if (board[rowIndex][index] === "") {
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
                setIsGameOver(true);
            }
            nextTurn();
        }
    };

    return (
        <div className="board">
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
    );
}
