import React from 'react';
import './styles/Shower.css'; 

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
      Shower
    </div>
  );
};

export default Shower;
