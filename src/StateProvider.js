import React, { createContext, useContext, useReducer } from "react";

//PREPARES DATA LAYER

export const StateContext = createContext();

// Wraps our app and provide data layer to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pulls information from Data layer
export const useStateValue = () => useContext(StateContext);

export default StateProvider;
