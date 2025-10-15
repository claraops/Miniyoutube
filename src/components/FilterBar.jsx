import React from "react";
import "./FilterBar.css";

const categories = ["nature", "voyage", "art", "ville", "animaux"];

function FilterBar({ category, setCategory }) {
  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={category === cat ? "active" : ""}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
