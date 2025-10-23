import React, { createContext, useContext, useMemo, useReducer } from 'react';

const CounterStateContext = createContext(null);
const CounterDispatchContext = createContext(null);

function counterReducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const stateValue = useMemo(() => state, [state]);
  const dispatchValue = useMemo(() => dispatch, [dispatch]);
  return (
    <CounterStateContext.Provider value={stateValue}>
      <CounterDispatchContext.Provider value={dispatchValue}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

function useCounterState() {
  const ctx = useContext(CounterStateContext);
  if (ctx == null) throw new Error('useCounterState must be used within CounterProvider');
  return ctx;
}

function useCounterDispatch() {
  const ctx = useContext(CounterDispatchContext);
  if (ctx == null) throw new Error('useCounterDispatch must be used within CounterProvider');
  return ctx;
}

function CounterControls() {
  const dispatch = useCounterDispatch();
  return (
    <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

function CounterDisplay() {
  const { count } = useCounterState();
  return <div style={{ marginTop: 8 }}>Count: {count}</div>;
}

export const UseContextReducerDemo = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useContext + useReducer demo</h2>
      <CounterProvider>
        <CounterDisplay />
        <CounterControls />
      </CounterProvider>
      <section style={{ marginTop: 16 }}>
        <h4>Incorrect</h4>
        <div>Do not mutate context state directly; always dispatch actions.</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>Memoize provider values to avoid unnecessary re-renders of consumers.</div>
      </section>
    </div>
  );
}

