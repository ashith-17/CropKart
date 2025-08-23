// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";

// import components
import Tools from "./components/tools.jsx";
import Irrigation from "./components/irrigation.jsx";
import Sowing from "./components/Sowing.jsx";
import Care from "./components/care.jsx";
import Seeds from "./components/seeds.jsx";
import Fertilizers from "./components/fertilizers.jsx";

export default function App() {
  return (
    <div>
      {/* ---------- Navbar ---------- */}
      <nav className="navbar">
        <div className="logo">🌱 CropKart</div>
        <ul>
          <li><a href="/">Home</a></li>

          <li><a href="#buy">Buy</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <Routes>
        {/* ---------- Home Route ---------- */}
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
              <section className="hero-section" id="home">
                <h1>All-in-One Digital Marketplace for Farmers</h1>
                <p>Empowering farmers, connecting buyers, and growing together.</p>
              </section>

              {/* About Section */}
              <section className="about-section" id="about">
                <div className="cards-container">
                  <div className="card">
                    <h2>What We Are</h2>
                    <p>Farmer’s Boon — empowering agriculture with fairness and technology.</p>
                  </div>
                  <div className="card">
                    <h2>What We Do</h2>
                    <p>We connect farmers directly with buyers, ensuring fair trade and access to resources.</p>
                  </div>
                  <div className="card">
                    <h2>Trusted By</h2>
                    <p>Over <strong>10,000+</strong> farmers across the country.</p>
                  </div>
                </div>
              </section>

              {/* Shop By Category */}
              <section className="buy-section" id="buy">
                <h1 className="section-title">Shop By Category</h1>
                <div className="cards-grid">
                  <Link to="/tools" className="buy-card">
                    
                    <h3>Farming Tools</h3>
                  </Link>

                  <Link to="/irrigation" className="buy-card">
                    
                    <h3>Irrigation Systems</h3>
                  </Link>

                  <Link to="/sowing" className="buy-card">

                    <h3>Sowing & Planting</h3>
                  </Link>

                  <Link to="/care" className="buy-card">
                    
                    <h3>Crop Care</h3>
                  </Link>

                  <Link to="/seeds" className="buy-card">
                    
                    <h3>Seeds</h3>
                  </Link>

                  <Link to="/fertilizers" className="buy-card">
                    
                    <h3>Eco Fertilizers</h3>
                  </Link>
                </div>
              </section>

              {/* Contact Section */}
              <section className="contact-section" id="contact">
                <h1>Contact Us</h1>
                <p>Email: <a href="mailto:support@cropkart.com">support@cropkart.com</a></p>
                <p>📞 +91 12345 67890</p>
                <p>📞 +91 98765 43210</p>
                <p>📞 +91 11223 44556</p>
              </section>
            </>
          }
        />

        {/* ---------- Category Routes ---------- */}
        <Route path="/tools" element={<Tools />} />
        <Route path="/irrigation" element={<Irrigation />} />
        <Route path="/sowing" element={<Sowing />} />
        <Route path="/care" element={<Care />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/fertilizers" element={<Fertilizers />} />
      </Routes>
    </div>
  );
}
