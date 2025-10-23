import React, { useDeferredValue, useMemo, useState } from 'react';

const makeItems = (n) => Array.from({ length: n }, (_, i) => `Row ${i}`);

export const UseDeferredValueDemo = () => {
  const [query, setQuery] = useState('');
  const items = useMemo(() => makeItems(2000), []);
  const deferredQuery = useDeferredValue(query);
  const filtered = useMemo(
    () => items.filter(x => x.toLowerCase().includes(deferredQuery.toLowerCase())),
    [items, deferredQuery]
  );

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useDeferredValue demo</h2>
      <section>
        <h4>Correct</h4>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search" />
        <div style={{ maxHeight: 150, overflow: 'auto', border: '1px solid #ddd', marginTop: 8 }}>
          {filtered.slice(0, 200).map(x => <div key={x}>{x}</div>)}
        </div>
      </section>
      <section>
        <h4>Incorrect</h4>
        <div>Rendering huge lists immediately from the urgent input value can feel laggy.</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>Deferred value may lag behind the input; don\'t use for form validation.</div>
      </section>
    </div>
  );
}
