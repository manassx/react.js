import { useState } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Manas", lastName: "Saxena", age: 20 },
    { id: 2, firstName: "Sonal", lastName: "Saxena", age: 27 },
    { id: 3, firstName: "Swati", lastName: "Saxena", age: 49 },
  ]);
  function increaseAge(id) {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      })
    );
  }

  function deleteUser(id) {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }

  return (
    <>
      <h1>State Example</h1>
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
    </>
  );
}

export default App;
