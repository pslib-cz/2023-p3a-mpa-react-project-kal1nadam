import React from 'react';
import { useHou } from '../context/HouContext'; // Adjust the import path as necessary
import StatBar from './StatBar';
import './styles/Stats.css'; // Import the CSS for styling

const Stats: React.FC = () => {
  const { state } = useHou(); // Assuming your context provides the state directly

  return (
    <div className="stats-container">
      <StatBar value={state.health} />
      <StatBar value={state.energy} />
      <StatBar value={state.hunger} />
      <StatBar value={state.happiness} />
    </div>
  );
};

export default Stats;
