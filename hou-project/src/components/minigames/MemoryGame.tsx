import React, { useState, useEffect } from 'react';
import '../styles/MemoryGame.css';  // Make sure the CSS is updated for styling color cards

type Card = {
  id: number;
  color: string;
  flipped: boolean;
};

// Initialize a set of colors for the memory game
const cardColors: string[] = ["red", "green", "blue", "yellow", "purple", "cyan"];

const MemoryGame: React.FC = () => {  const [cards, setCards] = useState<Card[]>([]);

  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const initializedCards: Card[] = cardColors
      .concat(cardColors) // Create pairs
      .map((color, index) => ({
          id: index,
          color: color,
          flipped: false // All cards start unflipped
      }))
      .sort(() => Math.random() - 0.5); // Shuffle the array randomly

    setCards(initializedCards);
  }, []);

  const handleCardClick = (index: number): void => {
    if (flippedIndexes.includes(index) || flippedIndexes.length === 2) {
      return;
    }

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      const firstCard = cards[newFlippedIndexes[0]];
      const secondCard = cards[newFlippedIndexes[1]];
      if (firstCard.color !== secondCard.color) {
        setTimeout(() => {
          setFlippedIndexes([]);
        }, 1000);
      } else {
        setFlippedIndexes([]);
      }
    }
  };

  return (
    <div className="memory-game">  
        {cards.map((card, index) => (
            <div
                className={`card ${card.flipped || flippedIndexes.includes(index) ? 'flipped' : ''}`}
                key={card.id}
                onClick={() => handleCardClick(index)}
                style={{ backgroundColor: flippedIndexes.includes(index) || card.flipped ? card.color : 'grey' }}
            >
            </div>
        ))}
    </div>
);
};

export default MemoryGame;
