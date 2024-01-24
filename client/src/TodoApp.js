import React, { useState, useEffect } from "react";
//import "./App.css";
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  return (
    <div>
      <h1>To Do List App</h1>
      <TodoList todos={todos} onDelete={deleteTodo} />
      <TodoForm onAdd={addTodo} />
    </div>
  );
};

export default TodoApp
