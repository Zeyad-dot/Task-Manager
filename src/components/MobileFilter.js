import React, { useState } from "react";

export default function MobileFilter({ setFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  const closeSidebar = (option) => {
    setFilter(option);  // Apply the filter logic
    setIsOpen(false);   // Close sidebar
  };

  return (
    <aside>
      <button className="dropdown-btn" onClick={toggleOpen}>
        <i className="fas fa-bars"></i>
      </button>

      <ul className={`mobile-list-sidebar ${isOpen ? 'open' : ''}`}>
        <li className="filter-btn" onClick={() => closeSidebar("all")}>
          All Tasks
        </li>
        <li className="filter-btn" onClick={() => closeSidebar("completed")}>
          Completed
        </li>
        <li className="filter-btn" onClick={() => closeSidebar("incomplete")}>
          Incomplete
        </li>
      </ul>
    </aside>
  );
}