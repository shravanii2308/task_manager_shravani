// src/components/TaskItem.js

import React from 'react';

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
