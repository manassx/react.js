import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, toggleCompleted, removeTodo }) {
  return todos.map((todo) => <TodoItem key={todo.id} {...todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />);
}

export default TodoList;
