import { useState, useEffect } from "react";

function CleanupFunctionDemo() {
  console.log("component renders");

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("inside useEffect");
    return function () {
      console.log("dismounted and cleaned");
    };
  }, [counter]);
  return (
    <div>
      <h1>count: {counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        increase
      </button>
    </div>
  );
}

export default CleanupFunctionDemo;
