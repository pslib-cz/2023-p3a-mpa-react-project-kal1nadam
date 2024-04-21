import React, { createContext, ReactNode, useContext, useDeferredValue, useEffect, useReducer, useState } from 'react';
import { Food, Hou } from '../types';
import houReducer from './HouRecucer';

//create enum for the actions
export enum HouActionType {
  HUNGER_CHANGE = 'hunger_change',
  HEALTH_CHANGE = 'health_change',
  HAPPINESS_CHANGE = 'happiness_change',
  ENERGY_CHANGE = 'energy_change',
  DECREASE_STATS_BASED_ON_TIME = 'decrease_stats_based_on_time',
  TOGGLE_SLEEP = 'toggle_sleep',
}

export type HouAction =
  | { type: HouActionType.HUNGER_CHANGE; payload: {amount: number}}
  | { type: HouActionType.HEALTH_CHANGE}
  | { type: HouActionType.HAPPINESS_CHANGE; payload: {amount: number} }
  | { type: HouActionType.ENERGY_CHANGE; payload: {amount: number}}
  | { type: HouActionType.DECREASE_STATS_BASED_ON_TIME; payload: {hoursElapsed: number}}
  | { type: HouActionType.TOGGLE_SLEEP; payload: {isSleeping: boolean}};


// All stats are full by default
const defaultState: Hou = {
  health: 100,
  energy: 100,
  hunger: 100,
  happiness: 100,
  lastUpdate: Date.now(), // Include a timestamp in the default state

  isSleeping: false,
  lastSleepTime: null,
};


// Create the context
export const HouContext = createContext<{
    state: Hou;
    dispatch: React.Dispatch<HouAction>
}>({state: defaultState, dispatch: () => null});

// Method to use the HouContext
export const useHou = () => {
  const context = useContext(HouContext);
  if (!context) throw new Error('useHou must be used within a HouProvider');
  return context;
};

// Load state from local storage or use default state
const loadState = () => {
  const storedState = localStorage.getItem('houState');
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    const currentTime = Date.now();
    const timeElapsed = currentTime - parsedState.lastUpdate; // Time elapsed in milliseconds
    const hoursElapsed = timeElapsed / (3600 * 1000); // Convert to hours

    return { ...parsedState, hoursElapsed }; // Include elapsed time in the loaded state
  }
  return defaultState;
};


export const HouProvider = ({ children }: { children: ReactNode }) => {
  // Call loadState here to initialize the state
  const initialState = loadState();

  // Initialize state from local storage or use default
  const [state, dispatch] = useReducer(houReducer, initialState);

  // Handle the loaded elapsed time immediately after mounting
  useEffect(() => {
    if (initialState.hoursElapsed !== undefined) {
      // Dispatch action to adjust stats based on the elapsed time
      dispatch({
        type: HouActionType.DECREASE_STATS_BASED_ON_TIME,
        payload: { hoursElapsed: initialState.hoursElapsed },
      });
    }
    // Ensure this runs only once on component mount
  }, []);


  // Sync state to local storage on state changes
  useEffect(() => {
    // Update state with current timestamp before saving
    localStorage.setItem('houState', JSON.stringify({ ...state, lastUpdate: Date.now() }));
  }, [state]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: HouActionType.HUNGER_CHANGE, payload: { amount: -1 } });
    }, 60000); // Decrease hunger every minute

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);



  //#region Sleep

  // Load sleep data from local storage
  useEffect(() => {
    const storedSleepData = localStorage.getItem('houSleeping');
    if (storedSleepData) {
        const { sleeping, timestamp } = JSON.parse(storedSleepData);
        const currentTime = Date.now();
        const minutesElapsed = (currentTime - timestamp) / (1000 * 60);
        const energyPoints = Math.floor(minutesElapsed / 5);

        if (sleeping) {
            dispatch({ type: HouActionType.TOGGLE_SLEEP, payload: {isSleeping: sleeping} });
            dispatch({ type: HouActionType.ENERGY_CHANGE, payload: {amount: energyPoints} });
        }
    }
  }, []);


  // Interval for when the app is open
  useEffect(() => {
    if (state.isSleeping) {
        const interval = setInterval(() => {
            dispatch({ type: HouActionType.ENERGY_CHANGE, payload :{amount: 1} });
        }, 300000); // Increase energy every 5 minutes
        return () => clearInterval(interval);
    }
  }, [state.isSleeping]);

  //#endregion





  return (
    <HouContext.Provider value={{ state, dispatch }}>
      {children}
    </HouContext.Provider>
  );

};

export default HouProvider;
