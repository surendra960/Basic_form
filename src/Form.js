import {useState} from 'react'

function Form(){
const [name,setName] = useState("");
const [tnc,setTnc] = useState("");
const [interest,setInterest] = useState("");


    function stopSubmit(e){
        console.warn(name,tnc,interest);
        e.preventDefault();
    }

function clearValue()
{
    setName("");
    setTnc("");
    setInterest("");
}
  return (
    <div>
        <h1>Handle form in react </h1>
        <form onSubmit = {stopSubmit}>
            <br />
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br /><br />
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option >Select a Option</option>
                <option >BMW</option>
                <option >Maruti Suzuki</option>
            </select>
            <br /><br />
            <input className='btn' type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept Terms and Condtion</span>
            <br /><br />
            <button className='btn' type ="submit">Submit</button>
            <button className='btn leftM'  onClick={clearValue}>Clear</button>
        </form>
        <br/><br/>
        
    </div>
  )
}

export default Form