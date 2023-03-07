import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';

function Timer() {
  const [counter, setCount] = useState(0);
  
  const plusFive = (event) => {
    setCount(counter + 5);
  }
  
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((counter) => counter + 1);
    }, 1000);
    
  return() => clearTimeout(timer);
});
  
  return (
    <>
    <p>The current count is {counter}.</p>
    <button onClick={plusFive}>+5</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
