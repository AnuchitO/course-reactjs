import React, { useMemo, useState, useTransition } from 'react';

const makeItems = (n) => Array.from({ length: n }, (_, i) => `Item ${i}`);

export const UseTransitionDemo = () => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const items = useMemo(() => makeItems(2000), []);
  const [filtered, setFiltered] = useState(items);

  const onChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    startTransition(() => {
      const f = items.filter(x => x.toLowerCase().includes(q.toLowerCase()));
      setFiltered(f);
    });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useTransition demo</h2>
      <section>
        <h4>Correct</h4>
        <input value={query} onChange={onChange} placeholder="Filter" />
        {isPending && <div>Updating list...</div>}
        <div style={{ maxHeight: 150, overflow: 'auto', border: '1px solid #ddd', marginTop: 8 }}>
          {filtered.slice(0, 200).map(x => <div key={x}>{x}</div>)}
        </div>
      </section>
      <section>
        <h4>Incorrect</h4>
        <div>Doing heavy filtering synchronously on each keystroke can block input.</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>Only defer non-urgent updates. Urgent ones (like input value) should remain immediate.</div>
      </section>
    </div>
  );
}
