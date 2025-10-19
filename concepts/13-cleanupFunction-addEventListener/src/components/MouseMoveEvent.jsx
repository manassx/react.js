import { useEffect, useState } from "react";

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

export default MouseMoveEvent;
