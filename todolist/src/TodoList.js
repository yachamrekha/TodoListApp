// TodoList.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import FilterOptions from './FilterOptions';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="container mt-5">
      <div className="card">
        <h1 className="card-header text-center">To-Do List</h1>
        <div className="card-body">
          <TodoForm addTask={addTask} />
          <div className="mt-3">
            <FilterOptions filter={filter} setFilter={setFilter} />
          </div>
          <ul className="list-group mt-3">
            {filteredTasks.map((task) => (
              <li key={task.id} className="list-group-item d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                />
                <span className={task.completed ? 'text-decoration-line-through me-auto' : 'me-auto'}>
                  {task.title}
                </span>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between">
          <p className="m-0">Total Tasks: {tasks.length}</p>
          <p className="m-0">Completed Tasks: {completedTasksCount}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
