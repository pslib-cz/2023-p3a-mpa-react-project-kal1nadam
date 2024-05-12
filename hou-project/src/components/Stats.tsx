import React from 'react';
import { useHou } from '../context/HouContext'; // Adjust the import path as necessary
import StatBar from './StatBar';
import './styles/Stats.css'; // Import the CSS for styling
import { statsIcons } from '../types';

const Stats: React.FC = () => {
  const { state } = useHou(); // Assuming your context provides the state directly

  return (
    <div className="stats-container">
      <StatBar value={state.health} Icon={statsIcons["Health"]} />
      <StatBar value={state.energy} Icon={statsIcons["Energy"]} />
      <StatBar value={state.hunger} Icon={statsIcons["Hunger"]} />
      <StatBar value={state.happiness} Icon={statsIcons["Happiness"]}/>
    </div>
  );
};

export default Stats;
