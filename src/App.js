import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count,setCount] =useState(0)
  const handleClick=(value)=>{
setCount(count+value)
  }
  return (
    <div className="App-header">
     <h1>Counter: {count}</h1>
     <button  onClick={()=>handleClick(+1)}>Inc</button>
     <button onClick={()=>handleClick(-1)}>Dec</button>
    </div>
  );
}

export default App;
