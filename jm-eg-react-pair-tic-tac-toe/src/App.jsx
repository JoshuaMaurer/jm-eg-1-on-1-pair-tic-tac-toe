import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("❌")

  // const handleClick = () => {
    // if(){

    // } else if() {

    // }
  // };

  const renderSquares = () => {
    return squares.map((value, index) => (
      <Square key={index} handleChange={handleClick} index={index}/>
    ));
  };

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <div className='grid'>{renderSquares()}</div>
    </div>
  );
};

export default App;
