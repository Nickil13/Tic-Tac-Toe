import React, { useState } from "react";
import Tile from "./Tile";

export default function Board({ turn, nextTurn }) {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

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
