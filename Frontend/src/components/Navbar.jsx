import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CropKart</div>
      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
