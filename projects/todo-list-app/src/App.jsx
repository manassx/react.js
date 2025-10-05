import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
function App() {
  const [todos, setTodos] = useState([
    
  ]);

  function addTodo(newTodo) {
    setTodos((prevState) => [...todos, newTodo]);
  }
  const removeTodo = (id) => {
    setTodos(prevState=>prevState.filter(todo=>todo.id!==id))
  };
  const toggleCompleted = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">Todo list</h1>
      <AddTodoForm
        todos={todos}
        addTodo={addTodo}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
