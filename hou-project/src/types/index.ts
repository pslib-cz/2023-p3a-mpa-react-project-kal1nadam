export interface Hou {
    health: number;
    energy: number;
    hunger: number;
    happiness: number;
    lastUpdate: number;
  }
  
  
  export type Food = {
    name: string;
    hungerValue: number;
  };
  
  export type SelectFoodFunction = (food: Food) => void;
  