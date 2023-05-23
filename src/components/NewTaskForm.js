import { useState } from 'react';

function NewTaskForm({ categories, onFormSubmitHandler }) {
  const relevantCategories = categories.filter(category => category !== 'All');
  const initialState = {
    text: '',
    category: 'code',
  };
  const [formData, setFormData] = useState(initialState);

  const changeHandler = e => {
    setFormData(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const formHandler = e => {
    e.preventDefault();
    onFormSubmitHandler(formData);
    setFormData(initialState);
  };

  return (
    <form className="new-task-form" onSubmit={formHandler}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={changeHandler}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          defaultValue={formData.category}
          onChange={changeHandler}
        >
          {relevantCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
