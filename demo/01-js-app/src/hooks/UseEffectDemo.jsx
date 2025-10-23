import React, { useEffect, useState } from 'react';

// Bad practice demo: intentionally causes an infinite render loop
const BadLoop = () => {
  const [n, setN] = useState(0);
  useEffect(() => {
    // No dependency array and setting state -> runs after every render
    setN(n + 1);
  });
  return <div>Looping count (will freeze): {n}</div>;
};

export const UseEffectDemo = () => {
  const [mountedFetchMsg, setMountedFetchMsg] = useState('');
  const [resizeCount, setResizeCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [showBadLoop, setShowBadLoop] = useState(false);

  // Correct: effect on mount with cleanup
  useEffect(() => {
    const controller = new AbortController();
    const id = setTimeout(() => {
      if (!controller.signal.aborted) setMountedFetchMsg('Fetched on mount (simulated)');
    }, 300);
    const onResize = () => setResizeCount(c => c + 1);
    window.addEventListener('resize', onResize);
    return () => {
      controller.abort();
      clearTimeout(id);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Incorrect: effect without deps updating state creates render loop (guarded to avoid freeze)
  useEffect(() => {
    if (badCount < 1) setBadCount(badCount + 1);
  });

  // Caveat: dependency array matters (stale closure example)
  const [tick, setTick] = useState(0);
  const [stale, setStale] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // Using empty deps reads initial value of `stale` forever
  useEffect(() => {
    const id = setInterval(() => setStale(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useEffect demo</h2>
      <section>
        <h4>Correct</h4>
        <p>{mountedFetchMsg || 'Fetching...'}</p>
        <p>Resize count (with cleanup): {resizeCount}</p>
      </section>
      <section>
        <h4>Incorrect</h4>
        <p>Effect without deps set state causing extra render once here (guarded): {badCount}</p>
        <div style={{ marginTop: 8, padding: 8, border: '1px solid #f00' }}>
          <strong>WARNING:</strong> Mounting the component below will intentionally freeze this tab by creating an infinite loop.
          {!showBadLoop && (
            <div>
              <button style={{ marginTop: 8 }} onClick={() => setShowBadLoop(true)}>Mount bad loop (freezes)</button>
            </div>
          )}
          {showBadLoop && (
            <div style={{ marginTop: 8 }}>
              <BadLoop />
            </div>
          )}
        </div>
      </section>
      <section>
        <h4>Caveat</h4>
        <p>Tick: {tick}</p>
        <p>Independent interval increments value using updater, avoiding stale closure: {stale}</p>
      </section>
    </div>
  );
}
