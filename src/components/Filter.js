import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <aside className="sidebar">
      <h2>Task Master</h2>
      <ul>
        <li className="filter-btn" onClick={() => setFilter('all')}>All Tasks</li>
        <li className="filter-btn" onClick={() => setFilter('completed')}>Completed</li>
        <li className="filter-btn" onClick={() => setFilter('incomplete')}>Incomplete</li>
      </ul>
    </aside>
  );
};

export default Filter;
