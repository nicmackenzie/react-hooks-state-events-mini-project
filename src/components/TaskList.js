import React from 'react';
import Task from './Task';

function TaskList({ tasks, setTasks }) {
  const handleDelete = name => {
    const filteredTasks = tasks.filter(task => task.text !== name);
    setTasks(filteredTasks);
  };
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.text} {...task} onDeleteHandler={handleDelete} />
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
