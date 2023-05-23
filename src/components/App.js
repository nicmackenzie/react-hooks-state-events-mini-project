import React from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';

function App() {
  const [categories] = React.useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [tasks, setTasks] = React.useState(TASKS);

  const filteredTasks = tasks.filter(task => {
    if (selectedCategory === 'All') return true;
    return task.category === selectedCategory;
  });

  const submitHandler = data => {
    // setTasks(data);
    setTasks([...filteredTasks, data]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={categories}
        onFormSubmitHandler={submitHandler}
      />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
