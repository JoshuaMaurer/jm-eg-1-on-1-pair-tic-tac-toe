import React, {useState} from 'react'
import './App.css'
import Square from './components/Square'

const App = () => {
  const [squares, setSquares] = useState()

  const handleClick = (event) => {
    console.log(handleClick(event.target))
  }


  return (
    <>
      <div className="superior">
        <div className="squares">
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
          <Square handleChange={handleClick}/>
        </div>
      </div>
    </>
  )
}

export default App