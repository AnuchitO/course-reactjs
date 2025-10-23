import React, { useReducer } from 'react';

function reducer(state, action) {
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

export const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Incorrect: directly mutating state object (don\'t do this)
  const mutateBadly = () => {
    // @ts-ignore
    state.count += 1; // no re-render
  };

  // Caveat: lazy init
  const [lazyState, lazyDispatch] = useReducer((s, a) => ({ count: (s?.count ?? 0) + (a?.delta ?? 0) }), undefined, () => ({ count: 10 }));

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h2>useReducer demo</h2>
      <section>
        <h4>Correct</h4>
        <div>Count: {state.count}</div>
        <button onClick={() => dispatch({ type: 'inc' })}>+</button>
        <button onClick={() => dispatch({ type: 'dec' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </section>
      <section>
        <h4>Incorrect</h4>
        <button onClick={mutateBadly}>Mutate state (will not re-render)</button>
        <div>Mutated count (state object mutated): {state.count}</div>
      </section>
      <section>
        <h4>Caveat</h4>
        <div>Lazy init count: {lazyState.count}</div>
        <button onClick={() => lazyDispatch({ delta: 5 })}>+5 (lazy)</button>
      </section>
    </div>
  );
}
