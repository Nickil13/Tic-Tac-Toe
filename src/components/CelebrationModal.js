import React from "react";

export default function CelebrationModal({ turn, playAgain }) {
    return (
        <div className="modal-container">
            <div className="modal">
                <h2 className="modal__title">
                    {turn === 0 ? "Player 1 Wins!" : "Player 2 Wins!"}
                </h2>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
}
