import React from 'react'

function Member(props) {
  return (
    <div style={{float : 'right' }}>
        <h1>Child Component2</h1>
        <button className='btn' onClick={props.data}>Call data function</button>
    </div>
  )
}

export default Member