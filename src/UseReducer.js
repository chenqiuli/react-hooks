import React, { useReducer } from "react";
// import { Button } from "antd";


// 用useReducer实现一个reducer
const ReducerDemo = () => {

  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  }, 0);



  return (
    <>
      <div>{`count初始值：${count}`}</div>
      <button onClick={() => dispatch("add")}>增加</button>
      <button onClick={() => dispatch("sub")}>减小</button>
    </>
  )
}

export default ReducerDemo;