import React, { useId, useState } from 'react';

function LabeledInput({ label }) {
  const id = useId();
  const [v, setV] = useState('');
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={v} onChange={e => setV(e.target.value)} />
    </div>
  );
}

export const UseIdDemo = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useId demo</h2>
      <section>
        <h4>Correct</h4>
        <LabeledInput label="First name" />
        <LabeledInput label="Last name" />
      </section>
      <section>
        <h4>Incorrect</h4>
        <div>Do not use useId for list keys.</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>IDs are stable across server/client; not for persistence.</div>
      </section>
    </div>
  );
}
