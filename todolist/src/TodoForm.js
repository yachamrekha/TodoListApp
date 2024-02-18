// TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskTitle.trim() === '') return;
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          value={newTaskTitle}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter task title"
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
