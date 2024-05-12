import React from 'react';
import './styles/Shower.css'; 

import { FaShower } from "react-icons/fa6";

const Shower: React.FC<{ onShower: () => void }> = ({ onShower }) => {
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // allow dropping
    onShower(); // called continuously while the element is dragged over the Hou
  };

  return (
    <div
      className="shower"
      draggable
      onDrag={handleDragOver} // Calls onShower every time the element is dragged over the Hou
    >
      <FaShower/>
    </div>
  );
};

export default Shower;
