import { Hou } from "../types";
import { HouAction } from "./HouContext";


function houReducer(state: Hou, action: HouAction): Hou {
    switch (action.type) {
      case 'feed':
        return { ...state, hunger: Math.min(state.hunger + action.amount, 100) };
      case 'shower':
        return { ...state, health: Math.min(state.health + 20, 100) };
      case 'play':
        return { ...state, happiness: Math.min(state.happiness + action.amount, 100) };
      case 'sleep':
        return { ...state, energy: 100 };
      default:
        throw new Error('Unhandled action type');
    }
  }

export default houReducer;