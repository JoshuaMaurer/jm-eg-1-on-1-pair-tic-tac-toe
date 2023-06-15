import React from 'react'

const Square = ( {handleClick, value, index} ) => {
  const clicks = () => {
    handleClick(index)
  }
  return (
    <div className="square" id={`square${index}`} onClick={clicks} >
        {value}
    </div>
  )
}

export default Square
