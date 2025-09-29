import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  function increaseFunc() {
    setCounter((prevState)=>prevState + 1);
  }
  function decreaseFunc() {
    setCounter((prevState)=>prevState - 1);
  }
  function reset() {
    setCounter(0);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increaseFunc}>inc</button>
      <button onClick={reset}>reset</button>
      <button onClick={decreaseFunc}>dec</button>
    </>
  );
}

export default Counter;
