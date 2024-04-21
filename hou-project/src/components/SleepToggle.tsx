import React, { useContext, useEffect } from 'react';
import { HouContext } from '../context/HouContext';

const SleepToggle: React.FC = () => {
  const { state, dispatch } = useContext(HouContext);

  useEffect(() => {
    let interval;
    if (state.isSleeping) {
      interval = setInterval(() => {
        dispatch({ type: 'INCREASE_ENERGY' });
      }, 1000); // Increase energy every second
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [state.isSleeping, dispatch]);

  const toggleSleep = () => {
    dispatch({ type: 'TOGGLE_SLEEP' });
    localStorage.setItem('isSleeping', JSON.stringify(!state.isSleeping));
  };

  return (
    <button onClick={toggleSleep}>
      {state.isSleeping ? 'Off' : 'On'}
    </button>
  );
};

export default SleepToggle;