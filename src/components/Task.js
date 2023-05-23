import React from 'react';

function Task({ text, category, onDeleteHandler }) {
  const clickHandler = () => {
    onDeleteHandler(text);
  };
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={clickHandler}>
        X
      </button>
    </div>
  );
}

export default Task;
