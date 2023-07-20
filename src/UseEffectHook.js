
import react, {useEffect,useState} from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);

useEffect(()=>{
    console.warn("useEffect");
})

// function callUpdate(){
//     // let a= count;
//     setCount(count+1);
// }
  return (
    <div className="classSuri">
        <h1>useEffect in React : { count}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  )
}

export default UseEffectHook