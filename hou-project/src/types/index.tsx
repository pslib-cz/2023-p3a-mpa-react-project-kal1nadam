import { FaApple, FaCarrot } from "react-icons/fa";
import { LuBanana } from "react-icons/lu";
import { IconType } from 'react-icons';

import { GiHealthNormal } from "react-icons/gi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaBolt } from "react-icons/fa";
import { RiEmotionHappyFill } from "react-icons/ri";

export interface Hou {
    health: number;
    energy: number;
    hunger: number;
    happiness: number;
    lastUpdate: number;
    isSleeping: boolean;
    lastSleepTime: number | null;
  }
  
  
  export type Food = {
    name: string;
    hungerValue: number;
  };

  type IconMap = {
    [key: string]: JSX.Element;
  };

  export const foodIcons: IconMap = {
    Apple: <FaApple />,
    Banana: <LuBanana />,
    Carrot: <FaCarrot />
  };

  type StatIconMap = {
    [key: string]: IconType;

  };

  export const statsIcons: StatIconMap = {
    Health: GiHealthNormal,
    Energy: FaBolt,
    Hunger: PiForkKnifeFill,
    Happiness: RiEmotionHappyFill
  }
  
  export type SelectFoodFunction = (food: Food) => void;
  