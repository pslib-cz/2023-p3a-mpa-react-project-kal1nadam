import Stats from "./Stats";
import {HouActionType, useHou } from "../context/HouContext";
import Hou from '../components/Hou';
import './styles/Rooms.css';
import NavigationButtons from "./NavigationButtons";

import { IoMdSunny, IoIosMoon } from "react-icons/io";

const Bedroom = () => {
  const {state, dispatch} = useHou();

  const toggleSleep = () => {
    dispatch({ type: HouActionType.TOGGLE_SLEEP, payload: { isSleeping: !state.isSleeping} });
  };


  return (
    <>
    <div className={`bedroom room-container ${state.isSleeping ? 'dim' : ''}`}>

      <div className="stats-container">
        <Stats />
      </div>
      <div className="room-content">
        <h2 className="room-title">Bedroom</h2>
        <p className="room-description">Where the Hou sleeps</p>
        <div className="bottom-options">
          <button className="toogleSleep" onClick={toggleSleep}>{state.isSleeping ? <IoMdSunny/> : <IoIosMoon/>}</button>
        </div>
      </div>
      
    </div>
    
    <Hou />
    <NavigationButtons />
    </>
  );
};

export default Bedroom;
