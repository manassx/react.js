import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = { count: 0 };
  function reducer(state, action) {
    console.log(state, action)
    if (action.type === "INCREMENT") {
      return { ...state, count: state.count + 1 };
    }
    if (action.type === "RESET") {
      return { ...state, count: 0 };
    }
    if (action.type === "DECREMENT") {
      return { ...state, count: state.count - 1 };
    }
    return state;
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrease() {
    dispatch({ type: "INCREMENT" });
  }
  function handleReset() {
    dispatch({ type: "RESET" });
  }
  function handleDecrease() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <>
      <h1>useReducer</h1>
      <hr />
      <h2>Counter Application</h2>

      <h1>{state.count}</h1>

      <div>
        <button onClick={handleIncrease}>increase</button>{" "}
        <button onClick={handleReset}>reset</button>{" "}
        <button onClick={handleDecrease}>decrease</button>
      </div>
    </>
  );
}

export default App;
