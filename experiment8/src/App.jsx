import React from 'react'
import { useState } from "react";

const App = () => {
const [count ,setCount]= useState(0);

 const increment = () => {
    setCount(count + 1);
  };

  
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = ()=>{
    setCount(0)
  } 
  
  return (
    <div className='main'>
      <div className="box">
        <h1>Increment,Decrement and Reset Using React</h1>
        <h1>{count}</h1>
        <div className="btn">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}> Decrement</button><br></br>
          <button id='reset'  onClick={reset}>Reset</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
