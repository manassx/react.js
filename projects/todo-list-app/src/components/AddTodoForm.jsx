import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import TodoList from "./TodoList";
import "./AddTodoForm.css";
function AddTodoForm({ todos, addTodo, toggleCompleted, removeTodo }) {
  let [title, setTitle] = useState("");

  function handleSubmit(e) {
    if (title.trim() === "") {
      e.preventDefault();
      toast.error("please fill the input", {
        autoClose:2000,
      });
    } else {
      e.preventDefault();
      setTitle("");
      const newTodo = {
        id: uuid(),
        title: title,
      };
      addTodo(newTodo);
    }
  }

  return (
    <>
    <ToastContainer/>
      <form onSubmit={handleSubmit} className="todoForm">
        
        <input
          className="todoForm-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="todoForm-btn">Add</button>  
      </form>

      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default AddTodoForm;
