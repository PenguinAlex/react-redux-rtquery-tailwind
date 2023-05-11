import React from "react";
import Card from "./Card";
import { CardData } from "../api/types";

interface BoardProps {
    cards: CardData[];
    onCardClick: (card: CardData) => void;
}

const Board: React.FC<BoardProps> = ({ cards, onCardClick }) => {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card
                    key = {card.id}
                    data = {card}
                    onCardClick={onCardClick}
                />
            ))}
        </div>
    );
};

export default Board;