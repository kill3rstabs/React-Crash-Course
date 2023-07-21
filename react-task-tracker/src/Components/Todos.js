import React from 'react'
import { TodoItem } from "./TodoItem";
export const Todos = ({todos}) => {
  return (
    <div><TodoItem todos = {todos} /></div>
  )
}
