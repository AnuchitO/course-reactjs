// demo useState
import React, { useState } from 'react';

export const UseStateDemo = () => {
  const [count, setCount] = useState(0);


  const handleCorrectOne = () => {
    setCount(count + 1); 
  }

  const handleIncorrectThree = () => {
    // what ever pass to setter is the final value. 
    // this case the count will be 1 (because it is the last value currently)
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  const handleCorrectThree = () => {
  //  👉 If your new state depends on the old state, use the functional form.
  setCount(c => c + 1); 
  setCount(c => c + 1); 
  setCount(c => c + 1); 
  }


  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useState demo</h2>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ margin: 4 }} onClick={() => setCount(c => c + 1)}>Increment</button>
        <button style={{ margin: 4 }} onClick={() => setCount(c => c - 1)}>Decrement</button>
        <button style={{ margin: 4 }} onClick={() => setCount(0)}>Reset</button>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ margin: 4 }} onClick={handleCorrectOne}>Correct +1</button>
        <button style={{ margin: 4 }} onClick={handleIncorrectThree}>Incorrect +3</button>
        <button style={{ margin: 4 }} onClick={handleCorrectThree}>Correct +3</button>
      </div>
    </div>
  );
}