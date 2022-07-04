import React from "react";
import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <form className="addTodos" onSubmit={submit}>
      <h3>Add your Todos</h3>
      <div className="addItemBox">
        <label htmlFor="todoName">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="todoName"
          id="todoName"
        />
      </div>
      <div className="addItemBox">
        <label htmlFor="todoDesc">Description</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          name="todoDesc"
          id="todoDesc"
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
