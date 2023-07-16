import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [loggedIn,setLoggedIn] = useState()

    function callChange(e){

        setLoggedIn(e.target.value);
        return(e.target.value)

    }

  return (
    <div>
        <h1>ConditionalRendering</h1>
        <input type="text" onChange={callChange} placeholder='insert value b/w 1 to 3' />
        {
            loggedIn==1 ? <h1>Welcome User1</h1> : loggedIn==2 ? <h1>Welcome User2 </h1> : loggedIn==3 ? <h1>Welcome User3</h1> : 
            <h1>User not defined </h1>
        }
    </div>
  )
}
