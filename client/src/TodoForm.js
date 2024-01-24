import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID (you may use a library like uuid)
    const id = new Date().getTime().toString();
    onAdd({ id, text: newTodo });
    setNewTodo('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new ToDo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;