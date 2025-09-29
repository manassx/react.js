import { useState } from "react";

function SimpleStateExample() {
  console.log("render");
  const [firstName, setFirstName] = useState("Manas");

  function changeName() {
    if (firstName === "Manas") {
      setFirstName("Anshu");
    } else {
      setFirstName("Manas");
    }
  }
  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={changeName}>Click</button>
    </>
  );
}

export default SimpleStateExample;
