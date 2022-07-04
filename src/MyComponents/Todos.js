import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  return (
    <div className="todosList">
      <h3>Todos List</h3>
      <div className="todos-item">
        {props.todos.length === 0
          ? "No todos to display"
          : props.todos.map((todo) => {
              return (
                <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
              );
            })}
      </div>
    </div>
  );
};
