import React, { useContext } from "react";
import { ColorContext, actionType } from "./context";

const Button = () => {
  const { dispatch } = useContext(ColorContext);
  return (
    <>
      <button onClick={() => dispatch({ type: actionType, value: 'red' })}>红色</button>
      <button onClick={() => dispatch({ type: actionType, value: 'blue' })}>蓝色</button>
    </>
  )
}

export default Button;