import React, { useState } from "react";
import { CardData } from "../api/types";
import "./styles.css";

interface CardProps  {
    data: CardData;
    onCardClick: (card: CardData) => void;
}

const Card = ({ data, onCardClick }: CardProps) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(true);
        onCardClick(data);
    };

    const { urls, alt_description } = data;

    return (
        <div className="card" onClick={handleClick}>
            <div className={`card-inner ${flipped ? "flipped" : ""}`}>
                <div className="card-front">
                    <img src={urls.small} alt={alt_description} />
                </div>
                <div className="card-back"></div>
            </div>
        </div>
    );
};

export default Card;