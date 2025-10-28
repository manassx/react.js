import Todo from "./Todo";

function Todos({ todos, dispatch }) {
  return todos.map((todo) => (
    <Todo key={todo.id} {...todo} dispatch={dispatch} />
  ));
}

export default Todos;
