
import React from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addItem = (item) => {
    setTodos((prevState) => [...prevState, item]);
  };

  const handleCompleted = (id) => {
    setTodos((prevState) => prevState.filter((_, index) => index !== id));
  };

  return (
    <div className="todo">
      <AddTodo item={addItem} />
      {todos.map((todo, index) => (
        <TodoItem key={index} item={todo} id={index} completed={handleCompleted} />
      ))}
    </div>
  );
}

export default App;
