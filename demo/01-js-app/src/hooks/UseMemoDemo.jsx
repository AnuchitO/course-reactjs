import React, { useMemo, useState } from 'react';

function expensive(n) {
  let s = 0;
  for (let i = 0; i < 200000; i++) s += Math.sin(i + n);
  return s.toFixed(2);
}

export const UseMemoDemo = () => {
  const [n, setN] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  const result = useMemo(() => expensive(n), [n]);

  // Incorrect: recompute every render
  const badResult = expensive(n);

  // Caveat: wrong deps cause stale memo
  const staleResult = useMemo(() => n * multiplier, [n]);

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useMemo demo</h2>
      <section>
        <h4>Controls</h4>
        <input type="number" value={n} onChange={e => setN(Number(e.target.value) || 0)} />
        <input type="number" value={multiplier} onChange={e => setMultiplier(Number(e.target.value) || 0)} style={{ marginLeft: 8 }} />
      </section>
      <section>
        <h4>Correct</h4>
        <div>Memoized expensive({n}): {result}</div>
      </section>
      <section>
        <h4>Incorrect</h4>
        <div>Non-memoized expensive({n}) recomputes every render: {badResult}</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>staleResult depends also on multiplier but deps omit it: {staleResult}</div>
      </section>
    </div>
  );
}
