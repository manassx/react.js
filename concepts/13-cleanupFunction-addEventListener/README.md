# Cleanup Function

**Case 1: Empty dependency array**
If you're using useEffect hook and the cleanup function is present, the cleanup function runs when the component unmounts

```jsx
function CleanupFunctionDemo() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("inside useEffect");
    return function () {
      console.log("dismounted and cleaned");
    };
  }, []);
  return (
    <div>
      <h1>count: {counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        increase
      </button>
    </div>
  );
}
```

**Case 2: When there is some value inside dependency array**
Here,

- first the component renders
- useEffect runs

Now, we change the value of state

So,

- the component rerenders
- clean up function of prev useEffect runs
- useEffect runs

# addEventListener

**practical example of Clean up function:**
If we don't add a clean up function, the event listener is going to stay even if we unmount the component.

```jsx
function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  function handleMousePosition(e) {
    console.log(`x: ${e.clientX} y: ${e.clientY}`);
    setMousePosition({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {
    document.addEventListener("mousemove", handleMousePosition);
    return function () {
      console.log("clean up function called");
      document.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);
  return (
    <>
      <h1>
        x: {mousePosition.x} y: {mousePosition.y}
      </h1>
    </>
  );
}
```
