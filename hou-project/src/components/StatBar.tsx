import React from 'react';
import './styles/StatBar.css'; // Import the CSS for styling

//props
interface StatBarProps {
  value: number;
}

const StatBar = ({ value }: StatBarProps) => {
  // Calculate the color based on the value
  const color = `rgb(${255 - value * 2.55}, ${value * 2.55}, 0)`;

  return (
    <div className="stat-bar">
      <div className="bar-outer">
        <div
          className="bar-inner"
          style={{
            height: `${value}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StatBar;