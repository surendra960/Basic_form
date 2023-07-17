import React, { useState } from "react";

function BasicFormValidatio() {

    const [user, setUser] = useState("");
    const [Password,setPassword] = useState("");
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    function loginHandle(e){
        if(user.length<3 || Password.length<3){
            alert('Please put correct values');
        }
        else{
            alert("all good");
        }
        e.preventDefault();
    }

    function userHandler(e){
        let item = e.target.value;
        if(item.length <3){
            setUserErr(true);
            // console.warn("invalid");
        }
        else{
            setUserErr(false);
        }
        // console.warn(e.target.value.length);
        setUser(item);
    }
    function passwordHandler(e){
        let item = e.target.value;
        if(item.length <3){
            setPassErr(true);
            // console.warn("invalid");
        }
        else{
            setPassErr(false);
        }
        // console.warn(e.target.value.length);
        setPassword(item)
    }

  return (
    <div>
        <h1 className="formHeading">Form validation practise</h1>
      <div className="box">
        <h1>Login</h1>
        <form onSubmit={loginHandle }>
          <div>
            <input className="inputs" type="text" placeholder="Enter user Id" onChange={userHandler}/>{userErr?<span>User Not valid</span>:""}
          </div>
          <div>
            <input
              className="inputs"
              type="password"
              placeholder="Enter user Password" onChange={passwordHandler}
            />{passErr?<span>User Not valid</span>:""}
          </div>
          <button className="inputs" type="submit">Login</button>
        </form>
      </div>
      <br/><br />
    </div>
  );
}

export default BasicFormValidatio;
