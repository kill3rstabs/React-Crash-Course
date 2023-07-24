import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className='container my-5'>
      <h3 className='text-center mb-4'>Todos List</h3>
      {todos.length === 0 ? (
        <div className='text-center'>
          <p>No Todos to Display</p>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div className='mb-3' key={todo.sno}>
            <div className='card'>
              <div className='card-body'>
                <TodoItem todo={todo} onDelete={onDelete} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
