import React from 'react'

const Square = ( {handleTurn, value, index} ) => {
  const clicks = () => {
    return handleTurn(index)
    // console.log("message")
  }
  return (
    <>
      <div className="square"  onClick={clicks}>
          {value}
      </div>
    </>
  )
}

export default Square