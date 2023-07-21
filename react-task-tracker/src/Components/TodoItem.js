import React from 'react'

export const TodoItem = (props) => {
  return (
    <div>
     <h4>  {props.todos[1].title} </h4>
     <p> {props.todos[1].desc}</p>
    </div>
  )
}
