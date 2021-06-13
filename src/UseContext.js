import React, { useState, useContext, createContext } from "react";

const CountContext = createContext();

// 需求：父组件想要传值给子组件，不想通过props属性值去传，想通过useContext
/**
 * 步骤一：先创建一个context上下文，
 * 步骤二：父组件中使用Provider包裹子组件
 * 步骤三：子组件使用useContext拿值
 */

// 这是一个父组件
function Parent () {
  const [count, setCount] = useState(0);
  const payload = {
    a: 1,
    b: 0,
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <CountContext.Provider value={payload}>
        <Child />
      </CountContext.Provider>
    </div>
  )
}


// 这是一个子组件 
function Child () {
  const res = useContext(CountContext);
  console.log(res, 'res');

  return (
    <div>{`我是子组件:`}</div>
  )
}

export default Parent;