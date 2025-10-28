function Todo({ id, title, completed, dispatch }) {
  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: id });
  };
  const handleToggle = () => {
    dispatch({ type: "TOGGLE", payload: id });
  };
  return (
    <div
      style={{
        background: "#292929",
        borderRadius: "1rem",
        padding: "0.5rem",
        margin: "1rem 0",
      }}
    >
      <h3>title: {title} </h3>
      <h3>status: {completed ? "completed" : "not completed"}</h3>
      <button onClick={() => handleDelete(id)}>delete</button>{" "}
      <button onClick={() => handleToggle(id)}>toggle complete</button>
    </div>
  );
}

export default Todo;
