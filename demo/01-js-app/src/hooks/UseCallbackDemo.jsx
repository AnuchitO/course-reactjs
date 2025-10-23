import React, { useCallback, useMemo, useState } from 'react';

const Child = React.memo(({ onAdd }) => {
  return <button onClick={onAdd}>Child Add</button>;
});

export const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  const stableAdd = useCallback(() => setCount(c => c + 1), []);
  const unstableAdd = () => setCount(count + 1);

  // Caveat: dependency array must include values used
  const wrongDeps = useCallback(() => setCount(count + 2), []);

  // Force unrelated state to show re-renders
  const [flag, setFlag] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useCallback demo</h2>
      <div>Count: {count}</div>
      <button onClick={() => setFlag(f => !f)}>Toggle unrelated: {String(flag)}</button>
      <section>
        <h4>Correct</h4>
        <Child onAdd={stableAdd} />
      </section>
      <section>
        <h4>Incorrect</h4>
        <Child onAdd={unstableAdd} />
      </section>
      <section>
        <h4>Caveat</h4>
        <button onClick={wrongDeps}>Wrong deps (+2 may be stale)</button>
      </section>
    </div>
  );
}
