import { useState } from "react";
import { v4 as uuid } from "uuid";

function AddTodoForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const newTodo = {
    id: uuid(),
    title: title,
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("fill something");
    }
    dispatch({ type: "ADD", payload: newTodo });
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Something"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodoForm;
