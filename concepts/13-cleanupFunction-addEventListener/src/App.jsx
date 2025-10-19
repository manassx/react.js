import { useState } from "react";
import CleanupFunctionDemo from "./components/CleanupFunctionDemo";
import MouseMoveEvent from "./components/MouseMoveEvent";
function App() {
  const [isCheck, setIsCheck] = useState(true);
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
      {isCheck && <MouseMoveEvent />}
    </div>
  );
}

export default App;
