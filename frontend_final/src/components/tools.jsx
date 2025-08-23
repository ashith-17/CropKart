import React from 'react';



// src/Tools.jsx
export default function Tools() {
  return (
    <section className="tools-section">
      <h1 className="section-title">Farming Tools</h1>
     

      <div className="cards-grid">
        <div className="buy-card">
          <img src="/icons/tractor.svg" alt="Tractor" />
          <h3>Tractor</h3>
        </div>
        <div className="buy-card">
          <img src="/icons/plough.svg" alt="Plough" />
          <h3>Plough</h3>
        </div>

         <div className="buy-card">
          <img src="/icons/plough.svg" alt="Plough" />
          <h3>Metal Wheel Barrow</h3>
        </div>
         <div className="buy-card">
          <img src="/icons/plough.svg" alt="Plough" />
          <h3>Round point shovel</h3>
        </div>

         <div className="buy-card">
          <img src="/icons/plough.svg" alt="Plough" />
          <h3>Sheer Wooden Handel</h3>
        </div>
        <div className="buy-card">
          <img src="/icons/plough.svg" alt="Plough" />
          <h3>Chaff Cutter </h3>
        </div>
      

        <div className="buy-card">
          <img src="/icons/hoe.svg" alt="Hoe" />
          <h3>Garden Cultivator</h3>
        </div>
        {/* Back to Home Button */}
      
      </div>
         

    </section>
  );
}

