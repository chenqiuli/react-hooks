import React, { useState, useMemo } from "react";

function UseMemo () {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(2);
  return (
    <>
      <button onClick={() => setCount(new Date().getTime())}>count</button>
      <button onClick={() => setNumber(new Date().getTime() + 'number')}>number</button>
      <ChildComponent name={count}>{number}</ChildComponent>
    </>
  )
}

function ChildComponent ({ count, children }) {

  const handleCount = (count) => {
    // console.log('count,-------------------');
    return `count,-------------------`
  }


  const countAction = useMemo(() => handleCount(count), [count]);

  return (
    <>
      <div>{countAction}</div>
      <div>{children}</div>
    </>
  )
}

export default UseMemo;