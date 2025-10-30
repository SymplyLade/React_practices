import React from "react";


const categories = ["All", "Food", "Transport", "Education", "Entertainment", "Others"];
const CategoryFilter = ({ setFilter, current }) => (
  <div className="filter-container">
    {categories.map((cat) => (
      <button
        key={cat}
        className={current === cat ? "active" : ""}
        onClick={() => setFilter(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);
export default CategoryFilter;