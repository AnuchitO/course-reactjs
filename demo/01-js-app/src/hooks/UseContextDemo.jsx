import React, { createContext, useContext, useMemo, useState } from 'react';

const ThemeContext = createContext('light');

export const UseContextDemo = () => {
  const [theme, setTheme] = useState('light');

  // Caveat: memoize provider value to avoid needless re-renders
  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }), [theme]);

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useContext demo</h2>
      <section>
        <h4>Correct</h4>
        <ThemeContext.Provider value={value}>
          <Toolbar />
        </ThemeContext.Provider>
      </section>
      <section>
        <h4>Incorrect</h4>
        <p>Consuming outside a provider uses default value:</p>
        <BadConsumer />
      </section>
      <section>
        <h4>Caveat</h4>
        <p>Provider value is memoized to keep reference stable when possible.</p>
      </section>
    </div>
  );
}

const Toolbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggle}>Toggle theme</button>
    </div>
  );
}

const BadConsumer = () => {
  const ctx = useContext(ThemeContext);
  return <div>Theme outside provider: {typeof ctx === 'string' ? ctx : JSON.stringify(ctx)}</div>;
}
