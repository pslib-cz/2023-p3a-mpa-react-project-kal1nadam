import React, { useState } from 'react';
import './styles/Fridge.css'; 
import { foodIcons, SelectFoodFunction } from '../types';

import { RiFridgeFill } from "react-icons/ri";



const foodItems = [
  { id: 1, name: 'Apple', hungerValue: 10 },
  { id: 2, name: 'Banana', hungerValue: 15 },
  { id: 3, name: 'Carrot', hungerValue: 5 }
];

interface FridgeProps {
    onSelectFood: SelectFoodFunction;
  }

const Fridge: React.FC<FridgeProps> = ({ onSelectFood }) => {
      const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="fridge-button" onClick={() => setIsOpen(true)}><RiFridgeFill/></button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            {foodItems.map(food => (
              <button key={food.id} onClick={() => {
                onSelectFood(food);
                setIsOpen(false);
              }}>
                {foodIcons[food.name]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fridge;
