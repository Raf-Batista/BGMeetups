import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
