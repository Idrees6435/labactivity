import React, { useState } from 'react';
import Counter from './counter';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div id='main_container'>
      <h1>Simple Counter App</h1>
      <Counter count={count} increment={handleIncrement} decrement={handleDecrement} />
    </div>
  );
}

export default Home;
