import React from 'react';
import { Food, foodIcons } from '../types';
import './styles/FoodItem.css';

type FoodItemProps = {
    food: Food;
  };

const FoodItem: React.FC<FoodItemProps> = ({ food }) => {
    const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("food", JSON.stringify(food));
  };

  if (!food) return null;

  return (
    <div className='item' draggable onDragStart={handleDragStart}>
      {foodIcons[food.name]}
    </div>
  );
};

export default FoodItem;
