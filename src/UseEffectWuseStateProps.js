import react, {useEffect,useState} from 'react'

function UseEffectWuseStateProps() {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

useEffect(()=>{
    console.warn("called with data state");
},[data])

useEffect(()=>{
    alert("Count is :" +count);
},[count])

// useEffect(()=>{
//     console.warn("useEffect");
// })
  return (
    <div className="classSuri">
        <h1>Count  :  {count}</h1>
        <h1>Data  :  {data}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>Update Count</button>
        <button className='btn leftM' onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  )
}

export default UseEffectWuseStateProps