import React, { createContext, ReactNode, useContext, useDeferredValue, useEffect, useReducer, useState } from 'react';
import { Food, Hou } from '../types';
import houReducer from './HouRecucer';


export type HouAction =
  | { type: 'feed'; amount: number }
  | { type: 'shower' }
  | { type: 'play'; amount: number }
  | { type: 'sleep' };


// All stats are full by default
const defaultState: Hou = {
  health: 100,
  energy: 100,
  hunger: 100,
  happiness: 100,
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



export const HouProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(houReducer, defaultState);


  return (
    <HouContext.Provider value={{ state, dispatch }}>
      {children}
    </HouContext.Provider>
  );

};
