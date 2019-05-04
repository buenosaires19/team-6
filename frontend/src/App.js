import React from 'react';
import logo from './logo.svg';
import './App.css';
import postulacion from './mock/postulacion.json';
import Header from './components/Header';
import HomeLinks from './components/HomeLinks';
import HomeTopSlider from './components/HomeTopSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HomeTopSlider />
        <HomeLinks />
      </header>
    </div>
  );
}

export default App;
