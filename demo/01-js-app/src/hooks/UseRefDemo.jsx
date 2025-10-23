import React, { useRef, useState } from 'react';

export const UseRefDemo = () => {
  const inputRef = useRef(null);
  const renders = useRef(0);
  const [value, setValue] = useState('');
  renders.current++;

  const focusInput = () => inputRef.current?.focus();

  // Incorrect: using state for mutable count (causes re-render)
  const [incorrectClicks, setIncorrectClicks] = useState(0);
  const correctClicks = useRef(0);

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useRef demo</h2>
      <section>
        <h4>Correct</h4>
        <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} placeholder="Type here" />
        <button style={{ marginLeft: 8 }} onClick={focusInput}>Focus</button>
        <div>Render count stored in ref (no re-render): {renders.current}</div>
      </section>
      <section>
        <h4>Incorrect</h4>
        <button onClick={() => setIncorrectClicks(c => c + 1)}>Track clicks in state</button>
        <div>Incorrect clicks (re-renders every click): {incorrectClicks}</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <button onClick={() => { correctClicks.current += 1; }}>Track clicks in ref</button>
        <div>Correct clicks (ref updates don\'t re-render): {correctClicks.current}</div>
      </section>
    </div>
  );
}
