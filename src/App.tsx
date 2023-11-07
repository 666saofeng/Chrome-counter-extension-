import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  let localCount = 0;
  const storedCount = localStorage.getItem('count');
  // function init(){
    if (storedCount !== null) {
      localCount = parseInt(storedCount);
    } else {
       localStorage.setItem('count', '0');
    }
  // }
  // useEffect(() => {
  //   console.log('useEffect');
  //   init();
  // });
  const [count, setCount] = useState(localCount);
  const add = () => {
    console.log('add_1');
    setCount(count + 1);
    console.log('add_2');
    localStorage.setItem('count', count.toString());
  };
  const sub= ()=>{
    // localStorage.getItem('count');
    setCount(count-1);
    localStorage.setItem('count', count.toString());
  }
  
  return (
    <div className="App">
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <p>count : {localCount} </p>
    </div>
  );
}

export default App;
