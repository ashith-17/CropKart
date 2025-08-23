// src/components/Fertilizers.jsx
export default function Fertilizers() {
  const fertilizers = [
    {
      name: "Dripping system",
     
      description: "Water efficient irrigation system.",
      price: "₹4500",
    },
    {
      name: "Storage System",
      
      description: "Helps to store water.",
      price: "₹400/ltr",
    },
    {
      name: "Sprinkler System",

      description: "Device used in  hydrating the plants.",
      price: "₹6000",
    },
    {
      name: "Hose Pipe",
      
      description: "Qualtity tube to irrigate the crops.",
      price: "₹550/mtr",
    },
  ];

  return (
    <section className="buy-section">
      <h1 className="section-title">Eco Fertilizers</h1>
      <div className="cards-grid">
        {fertilizers.map((fert, index) => (
          <a
            href="https://surveyheart.com/form/68a9616ed7af4a8fb6ec27f7"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-card-link"
            key={index}
          >
            <div className="buy-card">
             
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
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
