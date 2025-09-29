## useState
React needs a special system to keep track of values that can change and should trigger a re-paint. That system is the useState hook.

useState is a hook that takes default value as an arguement and returns an array consisting stateVariable and functionToUpdateThatStateVariable.

> useState(defaultValue) ---> [stateVariable, functionToUpdateThatStateVariable]

in SimpleStateExample.jsx component file,

```javascript
function App() {
  const [firstName, setFirstName] = useState("Manas");

  function changeName() {
    setFirstName("Anshu");
  }
  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={changeName}>Click</button>
    </>
  );
}
```

When state changes, our component rerenders and then the UI changes.

> Built a counter application using useState, check out inside components file how it functions.

#### We can use callback(in js) or updater function(in react) inside stateFunction

```javascript 

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
```