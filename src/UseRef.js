import React, { useRef } from "react";

export default function UseRef () {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => { inputRef.current.value = 'jjj' }}>点击给input赋值</button>
    </>
  )
}

