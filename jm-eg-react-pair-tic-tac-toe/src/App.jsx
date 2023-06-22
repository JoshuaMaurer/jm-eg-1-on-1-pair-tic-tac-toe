import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true)

  const handleTurn = (index) => {
    if(squares[index]){
      return squares[index]
    } 
    const boardUpdate = squares
      if(playerTurn){
        boardUpdate[index] = "❌"
      } else {
        boardUpdate[index] = "⭕️"
      }
      setSquares(boardUpdate)
      setPlayerTurn(!playerTurn)
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
   
    const result = lines.map(([a, b, c]) => {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
      return null;
    })
    return result.find((value) => value !== null) || null;
  }
  const winning = calculateWinner(squares)
  let currentState
  if (winning){
    currentState = winning + " wins the game!"
  }else{
    currentState = (playerTurn ? "❌" : "⭕️") + " it's your turn"
  }

  return (
    <>
      <div className="app">
        <h1>Tic-Tac-Toe</h1>
        <div className='grid'>{squares.map((
          value, index
        ) => {
          return (
            <Square key={index} value={value} index={index} handleTurn={handleTurn} />
          )
        })}</div>
      </div>
      <div className="updateMessage">
        {currentState} 
      </div>
    </>
  );
};

export default App;
