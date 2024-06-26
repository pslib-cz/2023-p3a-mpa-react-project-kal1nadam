import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/Navigation.css';

import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

type RoomPath = '/kitchen' | '/bathroom' | '/playroom' | '/bedroom';
const roomOrder: RoomPath[] = ['/kitchen', '/bathroom', '/playroom', '/bedroom'];

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex: number = roomOrder.findIndex((path: RoomPath) => path === location.pathname);
  const navigateToRoom = (direction: number): void => {
    const nextIndex: number = (currentIndex + direction + roomOrder.length) % roomOrder.length;
    navigate(roomOrder[nextIndex]);
  };

  return (
    <div>
      <button className="navigation-button left" onClick={() => navigateToRoom(-1)}><BiSolidLeftArrow/></button>
      <button className="navigation-button right" onClick={() => navigateToRoom(1)}><BiSolidRightArrow/></button>
    </div>
  );
};

export default NavigationButtons;
