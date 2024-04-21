import React from 'react';
import { Food } from '../types';

type FoodItemProps = {
    food: Food;
  };

const FoodItem: React.FC<FoodItemProps> = ({ food }) => {
    const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("food", JSON.stringify(food));
  };

  if (!food) return null;

  return (
    <div draggable onDragStart={handleDragStart}>
      {food.name}
    </div>
  );
};

export default FoodItem;
