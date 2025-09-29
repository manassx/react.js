import { useState } from "react";
import { v4 as uuid } from "uuid";

function StateExampleArray() {
  const [fruits, setFruits] = useState([
    { id: uuid(), name: "Apple" },
    { id: uuid(), name: "Mango" },
    { id: uuid(), name: "Orange" },
  ]);
 
  function handleFruits() {
    setFruits((prevFruits) => [
      ...prevFruits,
      { id: uuid(), name: "Peach" },
    ]);
  }
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
      <button onClick={handleFruits}>Add Fruit</button>
    </>
  );
}

export default StateExampleArray;
