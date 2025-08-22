import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


export default function App() {
 
 
  return (
    <div>
       {/* Akash this is the Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#buy">BUY</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      
      <div className="content">
        <h1>CropKart</h1>
        <p>
          CropKart: Your all-in-one digital marketplace for fair trade, affordable farm equipment, and smarter agriculture.
        </p>
      </div>
    </div>
  );
}
