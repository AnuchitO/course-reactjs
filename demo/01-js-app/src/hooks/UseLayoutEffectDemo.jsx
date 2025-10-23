import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const UseLayoutEffectDemo = () => {
  const boxRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [color, setColor] = useState('lightblue');

  // Correct: measure layout before paint
  useLayoutEffect(() => {
    const el = boxRef.current;
    if (el) setSize({ w: el.offsetWidth, h: el.offsetHeight });
  }, [color]);

  // Incorrect: measuring in useEffect may cause flicker
  const [effectSize, setEffectSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = boxRef.current;
    if (el) setEffectSize({ w: el.offsetWidth, h: el.offsetHeight });
  }, [color]);

  // Caveat: useLayoutEffect blocks painting; use sparingly

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useLayoutEffect demo</h2>
      <button onClick={() => setColor(c => c === 'lightblue' ? 'peachpuff' : 'lightblue')}>Toggle color</button>
      <div ref={boxRef} style={{ width: 200, height: 100, background: color, marginTop: 8 }} />
      <section>
        <h4>Correct</h4>
        <div>Measured with useLayoutEffect: {size.w}x{size.h}</div>
      </section>
      <section>
        <h4>Incorrect</h4>
        <div>Measured with useEffect (may flicker): {effectSize.w}x{effectSize.h}</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>Only measure when necessary; keep deps minimal to avoid blocking renders.</div>
      </section>
    </div>
  );
}
