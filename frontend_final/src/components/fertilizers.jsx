// src/components/Fertilizers.jsx
export default function Fertilizers() {
  const fertilizers = [
    {
      name: "Phosphorus-Based Fertilizers",
      
      description: "Boosts root development and flowering in crops.",
      price: "₹450/kg",
    },
    {
      name: "Nitrogen-Based Fertilizers",
      img: "/icons/fertilizer.svg",
      description: "Enhances leaf growth and overall plant vigor.",
      price: "₹400/kg",
    },
    {
      name: "Micronutrient Fertilizers",
      img: "/icons/fertilizer.svg",
      description: "Provides essential trace elements for healthy plants.",
      price: "₹600/kg",
    },
    {
      name: "Eco-Friendly Fertilizers",
     
      description: "Sustainable organic fertilizers safe for soil and water.",
      price: "₹550/kg",
    },
  ];

  return (
    <section className="buy-section">
      <h1 className="section-title">Eco Fertilizers</h1>
      <div className="cards-grid">
        {fertilizers.map((fert, index) => (
          <div className="buy-card group" key={index}>
            
            <h3>{fert.name}</h3>
            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "10px",
                color: "#444",
              }}
            >
              {fert.description}
            </p>
            <p
              style={{
                fontWeight: "700",
                color: "#166534",
                marginBottom: "15px",
              }}
            >
              {fert.price}
            </p>

            {/* Hover Buy Now Button */}
            <a
              href="https://surveyheart.com/form/68a9616ed7af4a8fb6ec27f7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-buy-btn"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
