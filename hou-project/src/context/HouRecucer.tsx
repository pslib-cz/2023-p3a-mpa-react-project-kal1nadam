import { Hou } from "../types";
import { HouAction, HouActionType } from "./HouContext";


function houReducer(state: Hou, action: HouAction): Hou {
    switch (action.type) {
      case HouActionType.HUNGER_CHANGE:
        return {
          ...state,
          hunger: Math.min(state.hunger + action.payload.amount, 100),
        };
      case HouActionType.HEALTH_CHANGE:
        return {
          ...state,
          health: 100,
        };
      case HouActionType.HAPPINESS_CHANGE:
        return {
          ...state,
          happiness: Math.min(state.happiness + action.payload.amount, 100),
        };
      case HouActionType.ENERGY_CHANGE:
        return {
          ...state,
          energy: 100,
        };
      case HouActionType.TOGGLE_SLEEP:
        return {
        ...state,
        isSleeping: !state.isSleeping,
    lastSleepToggle: Date.now() // Track when sleep was toggled
  };
      case HouActionType.DECREASE_STATS_BASED_ON_TIME:
        return {
          ...state,
          health: Math.max(state.health - action.payload.hoursElapsed, 0),
          energy: Math.max(state.energy - action.payload.hoursElapsed, 0),
          hunger: Math.max(state.hunger - action.payload.hoursElapsed, 0),
          happiness: Math.max(state.happiness - action.payload.hoursElapsed, 0),
        };
      default:
        return state;
    }
  }

export default houReducer;