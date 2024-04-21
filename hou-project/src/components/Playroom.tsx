import Stats from "./Stats";

const Playroom = () => {
  return (
    <div className="room-container">
      <div className="room-navigation">
        {/* Assuming NavigationButtons already styled and positioned on the sides */}
        {/* <NavigationButtons /> */}
      </div>
      <div className="stats-container">
        <Stats />
      </div>
      <div className="room-content">
        <h2 className="room-title">Playroom</h2>
        <p className="room-description">Hou wants to be played</p>
      </div>
    </div>
  );
};

export default Playroom;
