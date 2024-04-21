import { HouActionType, useHou } from "../context/HouContext";
import Shower from "./Shower";
import Stats from "./Stats";
import './styles/RoomLayout.css';

const Bathroom = () => {
  const {dispatch} = useHou();

  const increaseHealth = () => {
    dispatch({ type: HouActionType.HEALTH_CHANGE, payload: {amount: 0.05} });
  };

  return (
    <div className="room-container">
      
      <div className="room-navigation"/>
       
      <div className="stats-container">
        <Stats />
      </div>

      <div className="room-content">
        <h2 className="room-title">Bathroom</h2>
        <p className="room-description">Wash your Hou</p>
        <div className="bottom-options">
        <Shower onShower={increaseHealth} />
        </div>
      </div>

    </div>
  );
};

export default Bathroom;
