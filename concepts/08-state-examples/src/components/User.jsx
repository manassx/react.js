import { useState } from "react";

function User({ firstName, lastName, age, id, increaseAge, deleteUser }) {
  return (
    <div className="userDiv">
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>age: {age}</p>
      <button onClick={() => increaseAge(id)}>age+</button>
      <button onClick={() => deleteUser(id)}>Delete User</button>
    </div>
  );
}

export default User;
