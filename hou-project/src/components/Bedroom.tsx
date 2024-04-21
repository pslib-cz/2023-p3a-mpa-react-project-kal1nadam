import React from "react";
import Stats from "./Stats";

const Bedroom = () => {


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
        <h2 className="room-title">Bedroom</h2>
        <p className="room-description">Where the Hou sleeps</p>
      </div>
    </div>
  );
};

export default Bedroom;
