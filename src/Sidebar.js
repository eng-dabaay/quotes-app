import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onCategorySelect }) => {
  const categories = ["Inspirational", "Motivational", "Life", "Love", "Wisdom"];

  return (
    <div className="sidebar">
      <h5><span>Name:</span> Libaan Raage</h5>
      <h4><span>IDCard:</span> C1210594</h4>
      <h4><span>Class Name:</span> CA2110</h4>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
