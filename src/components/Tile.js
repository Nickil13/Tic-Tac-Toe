import React from "react";

export default function Tile({ value, onClick }) {
    return (
        <div className="tile" onClick={onClick}>
            {value === "c" ? (
                <div className="circle"></div>
            ) : (
                value === "s" && <div className="square"></div>
            )}
        </div>
    );
}
