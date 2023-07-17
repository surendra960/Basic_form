import React from 'react'

function PassFuctionAsProps(Props) {
  return (
    <div>
        <h1>Child Component</h1>
        <button onClick={Props.data}>Call Data Function</button>
    </div>
  )
}

export default PassFuctionAsProps