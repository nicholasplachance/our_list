import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useState } from "react";

const Todo = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();

    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className='todo'>
      <input
        className='todo-text'
        style={{ textDecoration: todo.completed && "line-through" }}
        type='text'
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
      />

      <div className='todo-btns'>
        <button
          className='button-complete'
          onClick={() => toggleComplete(todo)}>
          <CheckCircleIcon id='i' />
        </button>
        <button
          className='button-edit'
          onClick={() => handleEdit(todo, newTitle)}>
          <EditIcon id='i' />
        </button>
        <button className='button-delete' onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id='i' />
        </button>
      </div>
    </div>
  );
};

export default Todo;
