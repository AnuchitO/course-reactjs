import React, { useEffect, useState } from 'react';

function useInterval(callback, delay) {
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
}

export const UseCustomHooksDemo = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  // Correct: reusable timing logic
  useInterval(() => setCount(c => c + 1), running ? 1000 : null);

  // Incorrect: duplicating interval logic inline in components leads to leaks
  const [bad, setBad] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setBad(b => b + 1), running ? 1000 : 0);
    if (!running) clearInterval(id);
    return () => clearInterval(id);
  }, [running]);

  // Caveat: ensure cleanup and stable callback deps

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>Custom Hook demo (useInterval)</h2>
      <button onClick={() => setRunning(r => !r)}>Running: {String(running)}</button>
      <section>
        <h4>Correct</h4>
        <div>Count (custom hook): {count}</div>
      </section>
      <section>
        <h4>Incorrect</h4>
        <div>Count (inline effect with interval): {bad}</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>Keep callback stable or include it in deps to avoid stale closures.</div>
      </section>
    </div>
  );
}
