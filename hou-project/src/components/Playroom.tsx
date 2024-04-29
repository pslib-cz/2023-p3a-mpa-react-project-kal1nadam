import React, { useState } from 'react';
import Stats from "./Stats";
import MemoryGame from './minigames/MemoryGame';
import Hou from '../components/Hou';
import NavigationButtons from './NavigationButtons';
import { HouActionType, useHou } from '../context/HouContext';

const Playroom = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    const {dispatch} = useHou();

    const handleGameComplete = () => {
      setGameStarted(false);
      dispatch({ type: HouActionType.HAPPINESS_CHANGE, payload: { amount: 30 } });
    };

    const handleGameExit = () => {
      setGameStarted(false); 
    }

    return (
      
        <div className="room-container">
          {!gameStarted && (
            <>
              <NavigationButtons />

              <div className="stats-container">
                <Stats />
              </div>
              <div className="room-content">
                <h2 className="room-title">Playroom</h2>
                <p className="room-description">Hou wants to be played</p>
                <Hou />
                <div className="bottom-options">
                  <button onClick={() => setGameStarted(true)}>Start Memory Game</button>
                </div>

            </div>
            </>
          )}
          {gameStarted && <MemoryGame onGameComplete={handleGameComplete} onGameExit={handleGameExit}/>}
            
        </div>
    );
};

export default Playroom;
