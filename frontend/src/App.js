import React from 'react';
import logo from './logo.svg';
import './App.css';
import postulacion from './mock/postulacion.json';
import AppRouter from './Router';
import Header from './components/Header';


function App() {
  return (
    <AppRouter >
      <Header/>
    </AppRouter>
  );
}

export default App;
