import React from 'react';
import './styles/Hou.css'; 
import { HouActionType, useHou } from '../context/HouContext';

const Pou: React.FC = () => {
  const { dispatch } = useHou();

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const food = JSON.parse(event.dataTransfer.getData("food"));
    
    dispatch({ type: HouActionType.HUNGER_CHANGE, payload: { amount: food.hungerValue } });

  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // allow dropping
  };

  return (
    <div className="hou" onDrop={handleDrop} onDragOver={handleDragOver}>
    </div>
  );
};

export default Pou;
