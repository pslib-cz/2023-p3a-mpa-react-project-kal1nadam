import React, { useState } from 'react';
import Stats from "./Stats";
import MemoryGame from './minigames/MemoryGame';
import Hou from '../components/Hou';
import NavigationButtons from './NavigationButtons';

const Playroom = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    return (
      
        <div className="room-container">
          {!gameStarted && (
            <>
              <div className="room-navigation">
              <NavigationButtons />
              </div>
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
          {gameStarted && <MemoryGame />}
            
        </div>
    );
};

export default Playroom;
