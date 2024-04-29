import React, { useState, useEffect } from 'react';
import '../styles/MemoryGame.css';  // Ensure the CSS is applied

type Card = {
  id: number;
  color: string;
  flipped: boolean;
  matched: boolean;
};

const cardColors: string[] = ["red", "green", "blue", "yellow", "purple", "cyan"];

const MemoryGame: React.FC<{ onGameComplete: () => void, onGameExit: () => void }> = ({ onGameComplete, onGameExit}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const initializedCards: Card[] = cardColors
      .concat(cardColors) // Duplicate to create pairs
      .map((color, index) => ({
          id: index,
          color,
          flipped: false,
          matched: false
      }))
      .sort(() => Math.random() - 0.5); // Shuffle the cards

    setCards(initializedCards);
  }, []);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const firstCard = cards[flippedIndexes[0]];
      const secondCard = cards[flippedIndexes[1]];
      if (firstCard.color === secondCard.color) {
        const newCards = cards.map(card => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(newCards);
        setFlippedIndexes([]);
      } else {
        setTimeout(() => {
          const newCards = cards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, flipped: false };
            }
            return card;
          });
          setCards(newCards);
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  }, [flippedIndexes, cards]);

  useEffect(() => {
    // Check for game completion
    if (cards.length > 0 && cards.every(card => card.matched)) {
      onGameComplete();
    }
  }, [cards, onGameComplete]);  // Dependency array ensures this only runs when cards or onGameComplete changes

  const handleCardClick = (index: number): void => {
    if (cards[index].matched || flippedIndexes.length === 2 || flippedIndexes.includes(index)) return;
    const newFlippedIndexes = [...flippedIndexes, index];
    const newCards = cards.map((card, idx) =>
      idx === index ? { ...card, flipped: true } : card
    );
    setCards(newCards);
    setFlippedIndexes(newFlippedIndexes);
  };

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div
          className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
          key={card.id}
          onClick={() => handleCardClick(index)}
          style={{ backgroundColor: card.flipped || card.matched ? card.color : 'grey' }}
        />
      ))}
      <button onClick={onGameExit} className="exit-game">Exit Game</button>
    </div>
  );
};


export default MemoryGame;
