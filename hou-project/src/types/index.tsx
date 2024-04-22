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
  
  export type SelectFoodFunction = (food: Food) => void;
  