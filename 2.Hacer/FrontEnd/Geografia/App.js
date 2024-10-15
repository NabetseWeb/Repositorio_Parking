import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import geografia from './geografia'
import geografiaid from './geografiaid'
import geografianombre from './geografianombre'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Consulta de geografia</h1>
        <geografianombre />
      </header>
    </div>
  );
}

export default App;
