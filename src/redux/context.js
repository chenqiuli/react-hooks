import React, { createContext, useReducer } from "react";

export const ColorContext = createContext();

export const actionType = 'UpdateColor';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UpdateColor':
      return action.value;
    default:
      return state;
  }
}

const Context = (props) => {
  const [color, dispatch] = useReducer(reducer, 'green');

  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}

export default Context;