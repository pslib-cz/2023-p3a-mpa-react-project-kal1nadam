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
          health: Math.min(state.health + action.payload.amount, 100),
        };
      case HouActionType.HAPPINESS_CHANGE:
        return {
          ...state,
          happiness: Math.min(state.happiness + action.payload.amount, 100),
        };
      case HouActionType.TOGGLE_SLEEP:
        localStorage.setItem('houSleeping', JSON.stringify({ sleeping: !state.isSleeping, timestamp: Date.now() }));
        return { ...state, isSleeping: action.payload.isSleeping, lastSleepTime: Date.now() };
      case HouActionType.ENERGY_CHANGE:
        return {
          ...state,
          energy: Math.min(state.energy + action.payload.amount, 100),
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