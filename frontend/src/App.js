import React from 'react';
import logo from './logo.svg';
import './App.css';
import postulacion from './mock/postulacion.json';
import Header from './components/Header';
import HomeLinks from './components/HomeLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>Slider de top postulaciones</p>
        <HomeLinks />
      </header>
    </div>
  );
}

export default App;
