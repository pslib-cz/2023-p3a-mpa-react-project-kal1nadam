import Stats from "./Stats";
import './styles/RoomLayout.css';

const Bathroom = () => {
  return (
    <div className="room-container">
      
      <div className="room-navigation"/>
       
      <div className="stats-container">
        <Stats />
      </div>

      <div className="room-content">
        <h2 className="room-title">Bathroom</h2>
        <p className="room-description">Wash your Hou</p>
      </div>

    </div>
  );
};

export default Bathroom;
