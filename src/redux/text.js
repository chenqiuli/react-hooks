import React, { useContext } from "react";
import { ColorContext } from "./context";

function Text () {
  const { color } = useContext(ColorContext);
  return (
    <div style={{ color: color }}>{`我现在为：${color}`}</div>
  )
}

export default Text;