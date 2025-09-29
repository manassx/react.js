import { useState } from "react";

function StateExampleObject() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Manas",
    lastName: "Saxena",
    phone: 6969696969,
    email: "manascodes04@gmail.com",
    age: 20,
  });

  function incAge() {
    setPerson((prevState) => ({ ...prevState, age: prevState.age + 1 }));
  }
  return (
    <>
      <p>firstName: {person.firstName}</p>
      <p>lastName: {person.lastName}</p>
      <p>phone: {person.phone}</p>
      <p>email: {person.email}</p>
      <p>age: {person.age}</p>
      <button onClick={incAge}>Increase age</button>
    </>
  );
}

export default StateExampleObject;
