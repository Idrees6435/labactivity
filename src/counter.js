import React from 'react';
import './App.css'

const Counter = ({ count, increment, decrement }) => {
  return (
    <div >
      <h1>Count: {count}</h1>
      <button onClick={increment} className='button-3'>Increment</button>
      <button onClick={decrement} className='button-3'>Decrement</button>
    </div>
  );
}

export default Counter;
