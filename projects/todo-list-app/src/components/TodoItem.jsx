import React, { useState } from "react";
import {ImCross} from "react-icons/im";
import "./TodoItem.css";

function TodoItem({ id, title, completed, toggleCompleted, removeTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        

        <p className = {`${completed? "completed": ""}`}>{title}</p>
      </div>
      <div className="cross-btn" onClick={() => removeTodo(id)}>
        <ImCross />
      </div>
    </div>
  );
}

export default TodoItem;
