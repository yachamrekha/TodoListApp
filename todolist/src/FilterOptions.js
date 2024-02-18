// FilterOptions.js
import React from 'react';

function FilterOptions({ filter, setFilter }) {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="btn-group" role="group">
      <input
        type="radio"
        id="filter-all"
        value="all"
        checked={filter === 'all'}
        onChange={handleChange}
        className="btn-check"
      />
      <label htmlFor="filter-all" className="btn btn-outline-primary">
        All
      </label>

      <input
        type="radio"
        id="filter-completed"
        value="completed"
        checked={filter === 'completed'}
        onChange={handleChange}
        className="btn-check"
      />
      <label htmlFor="filter-completed" className="btn btn-outline-primary">
        Completed
      </label>

      <input
        type="radio"
        id="filter-pending"
        value="pending"
        checked={filter === 'pending'}
        onChange={handleChange}
        className="btn-check"
      />
      <label htmlFor="filter-pending" className="btn btn-outline-primary">
        Pending
      </label>
    </div>
  );
}

export default FilterOptions;
