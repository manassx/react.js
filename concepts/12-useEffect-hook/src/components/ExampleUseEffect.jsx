import { useEffect, useState } from 'react'

function ExampleUseEffect() {
    const [counter, setCounter] = useState(0);
    console.log("component rendered")
    useEffect(()=>console.log("inside useEffect"), [counter])
  return (
    <>
    count: {counter} <br /> <br />
    <button onClick={(e)=>setCounter(prevCount=> prevCount + 1)}>increase</button>
    </>
  ) 
}

export default ExampleUseEffect
