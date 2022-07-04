import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <div className='todo-item'>
      <h4>{todo.sno}</h4>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="delete" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
