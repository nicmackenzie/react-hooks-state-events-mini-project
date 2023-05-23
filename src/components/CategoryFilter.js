import React from 'react';

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const clickHandler = e => {
    setSelectedCategory(e.target.textContent);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          className={selectedCategory === category ? 'selected' : ''}
          key={category}
          onClick={clickHandler}
        >
          {category}
        </button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
