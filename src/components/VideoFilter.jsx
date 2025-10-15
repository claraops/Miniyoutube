import './VideoFilter.css'

function VideoFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="video-filter">
      <h3>📂 Catégories</h3>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default VideoFilter