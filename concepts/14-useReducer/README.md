# useReducer

it's mainly used to manage complex states and we generally keep complex states inside objects.


```jsx
// 1. Initialization Phase (Component Mounts)
//----------------------------------------------
function App() {
  // a. Define the initial state shape and value
  const initialState = { count: 0 };

  // b. Define the "instruction manual" (reducer function)
  //    This function describes HOW state *can* change, given a current state and an action.
  function reducer(state, action) {
    if (action.type === "INCREMENT") {
      // Return a *new* state object based on the old state + action
      return { ...state, count: state.count + 1 };
    }
    if (action.type === "RESET") {
      return { ...state, count: 0 };
    }
    if (action.type === "DECREMENT") {
      return { ...state, count: state.count - 1 };
    }
    // If action type is unknown, return the state unchanged
    return state;
  }

  // c. Ask React for state management using the reducer pattern
  //    - Pass the instruction manual (reducer) and the starting value (initialState)
  //    - React internally creates a state container initialized with { count: 0 }
  //    - React gives back:
  //      - `state`: The *current* value from its internal container ({ count: 0 } initially)
  //      - `dispatch`: A *special function* provided by React to send messages/actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // d. Define helper functions that will use the dispatch function
  function handleIncrease() {
    // When called, this will send the { type: "INCREMENT" } message to React
    dispatch({ type: "INCREMENT" });
  }
  function handleReset() {
    dispatch({ type: "RESET" });
  }
  function handleDecrease() {
    dispatch({ type: "DECREMENT" });
  }

  // e. First Render: React renders the component using the initial `state`
  return (
    <>
      <h1>useReducer</h1>
      <hr />
      <h2>Counter Application</h2>
      {/* Reads state.count (which is 0 initially) */}
      <h1>{state.count}</h1>
      <div>
        {/* Attaches the helper functions to button clicks */}
        <button onClick={handleIncrease}>increase</button>{" "}
        <button onClick={handleReset}>reset</button>{" "}
        <button onClick={handleDecrease}>decrease</button>
      </div>
    </>
  );
}

// 2. Update Phase (User clicks "increase")
//-------------------------------------------
// a. The `handleIncrease` function is called.
// b. `dispatch({ type: "INCREMENT" })` is executed.
//    - `dispatch` does *not* change the state directly.
//    - It sends the action object `{ type: "INCREMENT" }` into React's internal system.

// c. React receives the action. It knows which `reducer` function is associated with this state.
// d. React retrieves the *current* state value from its internal container (which is still { count: 0 }).
// e. React calls *your* reducer function: `reducer({ count: 0 }, { type: "INCREMENT" })`.

// f. Inside your reducer:
//    - `action.type` is "INCREMENT", so the first `if` condition is true.
//    - It calculates the *new* state: `{ ...{ count: 0 }, count: 0 + 1 }` which results in `{ count: 1 }`.
//    - Your reducer **returns** this new state object `{ count: 1 }`.

// g. React receives the *returned* value `{ count: 1 }` from your reducer.
// h. React compares the returned state `{ count: 1 }` with the previous state `{ count: 0 }`. They are different.
// i. React **replaces** the old state in its internal container with the new state `{ count: 1 }`.
// j. Because the state changed, React **triggers a re-render** of your `App` component.

// 3. Re-render Phase
//-------------------
// a. The `App` function runs again.
// b. `useReducer` is called again. This time, React gives back:
//    - `state`: The *new* current value from its internal container (`{ count: 1 }`).
//    - `dispatch`: The same stable dispatch function as before.
// c. The JSX is rendered using the new `state`. The `<h1>` now displays `1`.

```