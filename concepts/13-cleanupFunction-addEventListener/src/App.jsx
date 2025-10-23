import { useState } from "react";
import CleanupFunctionDemo from "./components/CleanupFunctionDemo";
import MouseMoveEvent from "./components/MouseMoveEvent";
import ExampleFetchData from "./components/ExampleFetchData";
function App() {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center",}}
    >
      <div>
        <label htmlFor="checkbox">show component</label>
        <input
          type="checkbox"
          name="checkbox"
          checked={isCheck}
          onChange={() => setIsCheck(!isCheck)}
        />
      </div>

      {/* {isCheck && <CleanupFunctionDemo />} */}
      {/* {isCheck && <MouseMoveEvent />} */}
      {isCheck && <ExampleFetchData />}
    </div>
  );
}

export default App;
