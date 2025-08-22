import React from 'react';
import CategoryCard from './CategoryCard';

function Categories() {
  const categoryData = [
    { title: "Irrigation", description: "Pumps, sprinklers, drip irrigation tools.", link: "#irrigation" },
    { title: "Ploughing", description: "Ploughs, tillers, tractors, and accessories.", link: "#ploughing" },
    { title: "Harvesting", description: "Combine harvesters, threshers, and tools.", link: "#harvesting" },
  ];

  return (
    <section id="categories" className="categories">
      <h2>Equipment Categories</h2>
      <div className="category-cards">
        {categoryData.map((cat) => (
          <CategoryCard 
            key={cat.title} 
            title={cat.title} 
            description={cat.description} 
            link={cat.link} 
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;
