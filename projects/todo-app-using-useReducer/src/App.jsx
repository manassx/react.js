import { useReducer } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Todos from "./components/Todos";
import "./App.css";
function App() {
  const initialTodos = [
    { id: 1, title: "finish react", completed: true },
    { id: 2, title: "drink monster", completed: false },
  ];

  function reducer(todos, action) {
    if (action.type === "DELETE") {
      return todos.filter((todo) => action.payload !== todo.id);
    } else if (action.type === "TOGGLE") {
      return todos.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    } else if (action.type === "ADD") {
      return [...todos, action.payload];
    } else {
      return todos;
    }
  }
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <AddTodoForm dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </>
  );
}

export default App;
