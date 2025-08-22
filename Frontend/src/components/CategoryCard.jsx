import React from 'react';

function CategoryCard({ title, description, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
        View Equipment
      </a>
    </div>
  );
}

export default CategoryCard; 
