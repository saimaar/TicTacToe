import React from 'react';
import logo from './logo.svg';
import Square from './components/Square'
import Board from './components/Board'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Square></Square>
      </header>
    </div>
  );
}

export default App;
