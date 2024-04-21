import { useState } from "react";
import FoodItem from "./FoodItem";
import Fridge from "./Fridge";
import Stats from "./Stats";
import { Food } from "../types";
import "./styles/RoomOptions.css";

const Kitchen = () => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  return (
    <div className="room-container">

      <div className="room-navigation"/>

      <div className="stats-container">
        <Stats />
      </div>

      <div className="room-content">

        <h2 className="room-title">Kitchen</h2>
        <p className="room-description">Feed your Hou</p>

        <div className="bottom-options">
          <Fridge onSelectFood={setSelectedFood} />
          {selectedFood && <FoodItem food={selectedFood} />}
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
