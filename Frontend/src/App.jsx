
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Categories from './components/Categories';
import Help from './components/Help';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Categories />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
