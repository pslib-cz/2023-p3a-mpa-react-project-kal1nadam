import Stats from "./Stats";
import {HouActionType, useHou } from "../context/HouContext";

const Bedroom = () => {
  const {state, dispatch} = useHou();

  const toggleSleep = () => {
    dispatch({ type: HouActionType.TOGGLE_SLEEP, payload: { isSleeping: !state.isSleeping} });
    localStorage.setItem('houSleeping', JSON.stringify({ sleeping: !state.isSleeping, timestamp: Date.now() }));
  };


  return (
    <div className={`room-container ${state.isSleeping ? 'dim' : ''}`}>
      <div className="room-navigation">
        {/* Assuming NavigationButtons already styled and positioned on the sides */}
        {/* <NavigationButtons /> */}
      </div>
      <div className="stats-container">
        <Stats />
      </div>
      <div className="room-content">
        <h2 className="room-title">Bedroom</h2>
        <p className="room-description">Where the Hou sleeps</p>
        <div className="bottom-options">
          <button onClick={toggleSleep}>{state.isSleeping ? 'Wake up' : 'Sleep'}</button>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
