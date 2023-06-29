import React from 'react';

const TodoItem = (props) => {
  return (
    <div className='todo-item'>
      <input type='checkbox' onChange={() => props.completed(props.id)} />
      <p className='m1-1'>{props.item}</p>
    </div>
  );
};

export default TodoItem;
