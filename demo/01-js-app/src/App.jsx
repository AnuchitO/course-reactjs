import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './profile/Avatar'
import {UseStateDemo} from './hooks/UseStateDemo'
import { UseEffectDemo } from './hooks/UseEffectDemo'
import { UseContextDemo } from './hooks/UseContextDemo'
import { UseContextReducerDemo } from './hooks/UseContextReducerDemo'
import { UseIdDemo } from './hooks/UseIdDemo'
import { UseReducerDemo } from './hooks/UseReducerDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Avatar />
      <section style={{ border: '1px solid #ddd', padding: 12, margin: '16px 0' }}>
        <h3>useState</h3>
        <UseStateDemo />
      </section>
      <section style={{ border: '1px solid #ddd', padding: 12, margin: '16px 0' }}>
        <h3>useEffect</h3>
        <UseEffectDemo />
      </section>
      <section style={{ border: '1px solid #ddd', padding: 12, margin: '16px 0' }}>
        <h3>useContext</h3>
        <UseContextDemo />
      </section>
      <section style={{ border: '1px solid #ddd', padding: 12, margin: '16px 0' }}>
        <h3>useId</h3>
        <UseIdDemo />
      </section>
      <section style={{ border: '1px solid #ddd', padding: 12, margin: '16px 0' }}>
        <h3>useContext + useReducer</h3>
        <UseContextReducerDemo />
      </section>
      <section style={{ border: '1px solid #ddd', padding: 12, margin: '16px 0' }}>
        <h3>useReducer</h3>
        <UseReducerDemo />
      </section>
    </>
  )
}

export default App
