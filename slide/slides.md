---
# React.js Course Presentation
theme: seriph
# Background for React course
background: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&h=1080&fit=crop
# Presentation information
title: React.js Fundamentals Course
info: |
  ## Learn Modern React Development

  Comprehensive course covering React.js fundamentals and best practices.

  Reference: [React Documentation](https://react.dev/learn) | [Tic-tac-toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
class: text-center
transition: slide-left
mdc: true
---

# React.js Fundamentals Course

<div class="text-4xl mb-8">
  🚀 Learn Modern React Development
</div>

<div class="text-2xl mb-12">
  From Components to Complete Applications
</div>

<div @click="$slidev.nav.next" class="mt-8 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer inline-block">
  Start Learning <carbon:arrow-right class="inline ml-2" />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://react.dev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-react />
  </a>
</div>

---
transition: fade-out
layout: center
class: text-center
---

# What You'll Learn

<div class="grid grid-cols-2 gap-8 mt-12 text-left">

<div class="space-y-4">
<div class="flex items-center space-x-3">
  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
  <span class="text-xl">Create and nest components</span>
</div>

<div class="flex items-center space-x-3">
  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
  <span class="text-xl">Add markup and styles</span>
</div>

<div class="flex items-center space-x-3">
  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
  <span class="text-xl">Display data</span>
</div>
</div>

<div class="space-y-4">
<div class="flex items-center space-x-3">
  <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
  <span class="text-xl">Render conditions and lists</span>
</div>

<div class="flex items-center space-x-3">
  <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
  <span class="text-xl">Respond to events and update screen</span>
</div>

<div class="flex items-center space-x-3">
  <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
  <span class="text-xl">Share data between components</span>
</div>
</div>

</div>

---
layout: two-cols
layoutClass: gap-16
---

# Why React?

Modern, declarative, and component-based approach to building user interfaces

## Key Benefits

- **Component-Based Architecture** - Build encapsulated components
- **Virtual DOM** - Efficient updates and rendering
- **JSX Syntax** - Write HTML-like code in JavaScript
- **Unidirectional Data Flow** - Predictable state management
- **Rich Ecosystem** - Vast collection of libraries and tools

## Learning Path

<div class="text-sm opacity-75 mt-4">

1. **Core Concepts** → Components, JSX, Props
2. **State & Events** → Managing component state
3. **Lists & Keys** → Dynamic content rendering
4. **Component Communication** → Props, State lifting
5. **Hooks** → Modern state management
6. **Projects** → Apply concepts in real applications

</div>

::right::

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" class="w-48 mx-auto mb-8"/>

<div class="text-2xl font-bold mb-4">React 18+</div>

<div class="space-y-2 text-sm">
  <div>✅ Declarative UI</div>
  <div>✅ Component Reusability</div>
  <div>✅ Virtual DOM</div>
  <div>✅ Strong Community</div>
  <div>✅ Rich Ecosystem</div>
</div>
</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop
---

# 1. Creating Components

Components are the building blocks of React applications

## Function Components

```jsx
// Basic function component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function component
const Greeting = () => {
  return <p>Welcome to React!</p>;
};
```

## Component Naming

- **Capitalize** component names (`Welcome`, not `welcome`)
- Use **PascalCase** for multi-word components (`UserProfile`)
- Components must return **JSX** (React elements)

## Nesting Components

```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Greeting />
    </div>
  );
}
```

::right::

<div class="bg-gray-100 p-6 rounded-lg">
<h3 class="text-xl font-bold mb-4">Key Points</h3>
<ul class="space-y-2 text-sm">
  <li>• Components are JavaScript functions</li>
  <li>• They return JSX (React elements)</li>
  <li>• Component names must be capitalized</li>
  <li>• Components can be nested inside each other</li>
</ul>
</div>

---
layout: two-cols
---

# 2. JSX - JavaScript + XML

JSX allows you to write HTML-like syntax in JavaScript

## Basic JSX Rules

```jsx
// JSX expressions must have one root element
function Card() {
  return (
    <div className="card">
      <h2>Title</h2>
      <p>Description</p>
    </div>
  );
}
```

## Embedding JavaScript

```jsx
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}
```

## JSX Attributes

```jsx
// HTML attributes become JSX attributes
<img src="image.jpg" alt="Description" />

// class becomes className
<div className="container">

// onclick becomes onClick (camelCase)
<button onClick={handleClick}>
```

::right::

## JSX vs HTML Differences

| HTML | JSX |
|------|-----|
| `class` | `className` |
| `onclick` | `onClick` |
| `for` (label) | `htmlFor` |
| All lowercase | camelCase for event handlers |
| String attributes | Expressions in `{}` |

<br>

## Multi-line JSX

```jsx
function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <img
        src="profile.jpg"
        alt="Profile picture"
        className="avatar"
      />
      <p>Bio information...</p>
    </>
  );
}
```

---
layout: center
class: text-center
---

# 3. Adding Styles

Multiple ways to style React components

## Inline Styles

```jsx
function StyledComponent() {
  const styles = {
    color: 'blue',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '5px'
  };

  return <div style={styles}>Styled Content</div>;
}
```

## CSS Classes (Recommended)

```jsx
import './Card.css';

function Card() {
  return (
    <div className="card">
      <h2 className="card-title">Title</h2>
      <p className="card-content">Content</p>
    </div>
  );
}
```

## CSS Modules

```jsx
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Title</h2>
      <p className={styles.content}>Content</p>
    </div>
  );
}
```

---
layout: image-right
image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop
---

# 4. Displaying Data

Pass data to components using **props**

## Props Basics

```jsx
// Parent component
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
}

// Child component
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}
```

## Props are Read-Only

```jsx
function Greeting({ name }) {
  // ❌ This won't work
  name = "Modified"; // Props are immutable

  // ✅ Do this instead
  return <h1>Hello, {name}!</h1>;
}
```

## Default Props

```jsx
function Greeting({ name = "Guest", age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
}
```

::right::

## Props Types

<div class="bg-blue-50 p-4 rounded-lg">
<h4 class="font-bold mb-2">Common Prop Patterns</h4>

- **String** → `<Component text="Hello" />`
- **Number** → `<Component count={5} />`
- **Boolean** → `<Component isVisible={true} />`
- **Array** → `<Component items={[1,2,3]} />`
- **Object** → `<Component user={{name: "John"}} />`
- **Function** → `<Component onClick={handleClick} />`

<br>

<h4 class="font-bold mb-2">Best Practices</h4>
- Keep props simple and focused
- Use destructuring for cleaner code
- Validate props in development (PropTypes)
- Document prop requirements
</div>

---
layout: two-cols
---

# 5. Conditional Rendering

Show different content based on conditions

## If Statements

```jsx
function UserStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please sign in.</h1>;
}
```

## Ternary Operator

```jsx
function UserStatus({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? 'Welcome back!' : 'Please sign in.'}
    </h1>
  );
}
```

## Logical AND Operator

```jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <p>
          You have {unreadMessages.length} unread messages.
        </p>
      )}
    </div>
  );
}
```

## Conditional Classes

```jsx
function Button({ isActive }) {
  return (
    <button className={`btn ${isActive ? 'active' : ''}`}>
      Click me
    </button>
  );
}
```

::right::

## Switch Statements

```jsx
function StatusMessage({ status }) {
  switch (status) {
    case 'loading':
      return <div>Loading...</div>;
    case 'success':
      return <div>Success!</div>;
    case 'error':
      return <div>Error occurred</div>;
    default:
      return <div>Unknown status</div>;
  }
}
```

## Conditional Lists

```jsx
function ProductList({ products, isAdmin }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {isAdmin && (
            <button>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
}
```

---
layout: center
class: text-center
---

# 6. Rendering Lists

Display arrays of data in React

## Basic List Rendering

```jsx
function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}
```

## Keys in Lists

```jsx
// ❌ Missing keys (React warning)
{products.map(product => (
  <li>{product.name}</li>
))}

// ✅ With keys
{products.map(product => (
  <li key={product.id}>
    {product.name}
  </li>
))}
```

## List with Complex JSX

```jsx
function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
          />
          <span className={todo.completed ? 'completed' : ''}>
            {todo.text}
          </span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

---
layout: two-cols
---

# 7. Event Handling

Respond to user interactions

## Basic Event Handlers

```jsx
function Button() {
  function handleClick() {
    console.log('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## Event Handler with Parameters

```jsx
function Button({ message }) {
  function handleClick() {
    alert(message);
  }

  return (
    <button onClick={handleClick}>
      Show Message
    </button>
  );
}
```

## Arrow Function Handlers

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Event Object

```jsx
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

::right::

## Common Events

| Event | Description | Element |
|-------|-------------|---------|
| `onClick` | User clicks | buttons, links, divs |
| `onChange` | Input value changes | input, textarea, select |
| `onSubmit` | Form submission | form |
| `onMouseEnter` | Mouse enters | any element |
| `onMouseLeave` | Mouse leaves | any element |
| `onKeyDown` | Key pressed | input, textarea |
| `onFocus` | Element focused | input, textarea |
| `onBlur` | Element loses focus | input, textarea |

<br>

## Event Handler Best Practices

- Use arrow functions for inline handlers
- Pass functions, not function calls
- Use `event.preventDefault()` for forms
- Clean up event listeners if needed

---
layout: image-right
image: https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop
---

# 8. State Management

Manage component data that changes over time

## useState Hook

```jsx
import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

## State Updates

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);        // ✅ Correct
    setCount(count + 1);        // ❌ May not work as expected
  };

  const incrementTwice = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
}
```

## Multiple State Variables

```jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <form>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={e => setAge(Number(e.target.value))}
        placeholder="Age"
      />
    </form>
  );
}
```

::right::

## State Guidelines

<div class="bg-yellow-50 p-4 rounded-lg">
<h4 class="font-bold mb-2">When to Use State</h4>

- ✅ User input (forms, search)
- ✅ UI state (modals, dropdowns)
- ✅ Server data (API responses)
- ✅ Component lifecycle state

<br>

<h4 class="font-bold mb-2">State Best Practices</h4>

- Keep state as simple as possible
- Group related state together
- Avoid deep nesting in state objects
- Use functional updates for async operations
- Don't mutate state directly
</div>

---
layout: two-cols
---

# 9. Sharing Data Between Components

Pass data from parent to child and lift state up

## Props: Parent to Child

```jsx
// Parent component
function App() {
  const [user, setUser] = useState({
    name: 'John',
    email: 'john@example.com'
  });

  return (
    <div>
      <Header user={user} />
      <Profile user={user} />
    </div>
  );
}

// Child component
function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

## Lifting State Up

```jsx
// Before: State in child
function Child() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// After: State in parent
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count} onIncrement={() => setCount(count + 1)} />
      <AnotherChild count={count} />
    </div>
  );
}
```

## Context API (Advanced)

```jsx
// Create context
const ThemeContext = createContext('light');

// Provide context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Use context
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

::right::

## Data Flow Patterns

<div class="bg-gray-100 p-4 rounded-lg">

### 1. **Props Down**
- Pass data from parent to children
- Unidirectional data flow
- Most common pattern

### 2. **Events Up**
- Children notify parents of changes
- Parents manage state
- Handle user interactions

### 3. **Context**
- Share data across component tree
- Avoid "prop drilling"
- Use for global state

<br>

<h4 class="font-bold">Best Practices</h4>
- Keep state as close as possible to where it's needed
- Lift state up only when multiple components need it
- Use context sparingly for truly global state
- Prefer props for component communication
</div>

---
layout: center
class: text-center
---

# 10. Building a Complete App

Putting it all together with a practical example

## Tic-Tac-Toe Game

<div class="text-2xl mb-8 font-bold">🎮 Let's Build Tic-Tac-Toe!</div>

<div class="bg-blue-50 p-6 rounded-lg max-w-md mx-auto">
  <div class="text-center">
    <div class="grid grid-cols-3 gap-2 mb-4">
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold">X</div>
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold">O</div>
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold">X</div>
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold">O</div>
      <div class="w-16 h-16 bg-blue-200 rounded flex items-center justify-center text-2xl font-bold">X</div>
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold"></div>
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold">O</div>
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold">X</div>
      <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl font-bold">O</div>
    </div>
    <div class="text-lg font-bold">Next player: X</div>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Restart Game
    </button>
  </div>
</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop
---

# Project Structure

Organize your React application effectively

## File Organization

```
src/
  components/
    Button.jsx
    Card.jsx
    Header.jsx
  pages/
    Home.jsx
    About.jsx
  hooks/
    useAuth.js
    useApi.js
  utils/
    helpers.js
  App.jsx
  index.jsx
```

## Component Structure

```jsx
// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

## Best Practices

- **One component per file**
- **Clear component naming**
- **Separate concerns** (UI, logic, styles)
- **Reusable components**
- **Consistent file structure**

::right::

## Project Setup

```bash
# Create new React app
npx create-react-app tic-tac-toe

# Navigate to project
cd tic-tac-toe

# Start development server
npm start
```

<br>

## Development Tools

<div class="bg-green-50 p-4 rounded-lg">
<h4 class="font-bold mb-2">Essential Tools</h4>

- **React DevTools** - Browser extension for debugging
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Vite** - Fast build tool (alternative to CRA)
- **TypeScript** - Type safety (optional)

<br>

<h4 class="font-bold mb-2">Learning Resources</h4>
- 📖 [React Documentation](https://react.dev/learn)
- 🎮 [Tic-tac-toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- 🧪 [React Testing](https://react.dev/learn/testing)
- 📚 [React Patterns](https://www.patterns.dev/posts/react-component-patterns)
</div>

---
layout: center
class: text-center
---

# 11. React Hooks

Modern React state management and side effects

## What are Hooks?

<div class="text-2xl mb-8 font-bold">🪝</div>

Hooks are functions that let you "hook into" React state and lifecycle features from function components.

- **No more classes** - Use state and lifecycle in function components
- **Reusable logic** - Share stateful logic between components
- **Modern React** - The future of React development

## Built-in Hooks

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="text-center">
  <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">🎯</div>
  <h3 class="text-lg font-bold mb-2">useState</h3>
  <p class="text-sm opacity-75">Manage component state</p>
</div>

<div class="text-center">
  <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">⚡</div>
  <h3 class="text-lg font-bold mb-2">useEffect</h3>
  <p class="text-sm opacity-75">Side effects & lifecycle</p>
</div>

<div class="text-center">
  <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">🌐</div>
  <h3 class="text-lg font-bold mb-2">useContext</h3>
  <p class="text-sm opacity-75">Access context values</p>
</div>

</div>

---
layout: two-cols
---

# useEffect Hook

Perform side effects in function components

## Basic useEffect

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect: Update document title
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Effect Dependencies

```jsx
useEffect(() => {
  // Runs after every render
}, []);

useEffect(() => {
  // Runs only when 'count' changes
}, [count]);

useEffect(() => {
  // Runs only when 'userId' changes
}, [userId]);
```

## Cleanup Effects

```jsx
useEffect(() => {
  // Set up subscription
  const subscription = subscribeToUserStatus(userId);

  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, [userId]);
```

::right::

## Common useEffect Patterns

<div class="bg-gray-100 p-4 rounded-lg">

### 1. **API Calls**
```jsx
useEffect(() => {
  fetchUserData(userId)
    .then(setUser);
}, [userId]);
```

### 2. **Event Listeners**
```jsx
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 3. **Timers**
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

<br>

<h4 class="font-bold">Effect Rules</h4>
- Effects run **after** every render
- Use dependencies array to control when effects run
- Always cleanup subscriptions/timers in return function
- Don't put objects/functions in dependencies (use useCallback/useMemo)

</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop
---

# useContext Hook

Access context values without nesting

## Creating Context

```jsx
// ThemeContext.js
import { createContext } from 'react';

export const ThemeContext = createContext('light');
```

## Providing Context

```jsx
// App.jsx
import { ThemeContext } from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

## Consuming Context

```jsx
// Button.jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button className={`btn-${theme}`}>
      Themed Button
    </button>
  );
}
```

::right::

## Context with State

<div class="bg-blue-50 p-4 rounded-lg">

```jsx
// UserContext.jsx
import { createContext, useContext } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
```

## Usage in Components

```jsx
function Profile() {
  const { user, logout } = useUser();

  if (!user) return <div>Please login</div>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

</div>

---
layout: two-cols
---

# Custom Hooks

Extract component logic into reusable functions

## Creating Custom Hooks

```jsx
// useCounter.js
import { useState } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset
  };
}
```

## Using Custom Hooks

```jsx
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Advanced Custom Hook

```jsx
// useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

::right::

## Custom Hook Examples

<div class="bg-green-50 p-4 rounded-lg">

### 1. **useFetch Hook**
```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
```

### 2. **useToggle Hook**
```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}
```

### 3. **useDebounce Hook**
```jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

<br>

<h4 class="font-bold">Custom Hook Rules</h4>
- Start hook names with "use"
- Only call hooks at the top level
- Only call hooks from React functions
- Extract reusable logic into custom hooks

</div>

---
layout: center
class: text-center
---

# Rules of Hooks

<div class="text-3xl mb-8 font-bold">📋</div>

## 1. Only Call Hooks at the Top Level

```jsx
// ✅ Good
function MyComponent() {
  const [name, setName] = useState('John');

  useEffect(() => {
    // Effect logic
  }, []);

  return <div>Hello {name}</div>;
}

// ❌ Bad - Don't call hooks inside conditions
function MyComponent() {
  if (someCondition) {
    const [name, setName] = useState('John'); // ❌
  }
}
```

## 2. Only Call Hooks from React Functions

```jsx
// ✅ Good - Inside React components
function MyComponent() {
  useEffect(() => {}, []);
}

// ✅ Good - Inside custom hooks
function useCustomHook() {
  useEffect(() => {}, []);
}

// ❌ Bad - Inside regular functions
function regularFunction() {
  useEffect(() => {}, []); // ❌
}
```

## 3. Call Hooks in the Same Order

React relies on the order of hook calls. Always call hooks in the same order on every render.

---
layout: two-cols
---

# Advanced Hooks

More powerful React hooks for complex scenarios

## useReducer

```jsx
import { useReducer } from 'react';

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', text });
  };

  return (
    <div>
      <button onClick={() => addTodo('New Todo')}>
        Add Todo
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

## useMemo & useCallback

```jsx
import { useMemo, useCallback } from 'react';

function ExpensiveComponent({ data, onItemClick }) {
  // Memoize expensive calculation
  const processedData = useMemo(() => {
    return data.map(item => item * 2);
  }, [data]);

  // Memoize event handler
  const handleClick = useCallback((item) => {
    onItemClick(item);
  }, [onItemClick]);

  return (
    <div>
      {processedData.map((item, index) => (
        <button key={index} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}
```

::right::

## useRef Hook

```jsx
import { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Focus me!"
    />
  );
}

// Accessing DOM elements
function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  return (
    <div>
      <video ref={videoRef} src="video.mp4" />
      <button onClick={playVideo}>Play</button>
    </div>
  );
}
```

## useImperativeHandle

```jsx
import { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => inputRef.current.value = ''
  }));

  return <input ref={inputRef} {...props} />;
});

function Parent() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        Focus Input
      </button>
      <button onClick={() => inputRef.current?.clear()}>
        Clear Input
      </button>
    </div>
  );
}
```

---
layout: center
class: text-center
---

# Hooks Best Practices

<div class="text-2xl mb-8 font-bold">💡</div>

## Performance Tips

<div class="grid grid-cols-2 gap-8 mt-8 text-left max-w-4xl mx-auto">

<div class="bg-blue-50 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">✅ Do</h3>
  <ul class="space-y-2 text-sm">
    <li>• Use <code>useMemo</code> for expensive calculations</li>
    <li>• Use <code>useCallback</code> for event handlers passed to children</li>
    <li>• Keep dependencies arrays minimal but correct</li>
    <li>• Extract custom hooks for reusable logic</li>
    <li>• Use <code>useReducer</code> for complex state logic</li>
  </ul>
</div>

<div class="bg-red-50 p-6 rounded-lg">
  <h3 class="text-xl font-bold mb-4">❌ Don't</h3>
  <ul class="space-y-2 text-sm">
    <li>• Don't overuse hooks - keep components simple</li>
    <li>• Don't put objects/functions in dependencies</li>
    <li>• Don't call hooks conditionally</li>
    <li>• Don't nest hook calls</li>
    <li>• Don't create hooks inside loops or conditions</li>
  </ul>
</div>

</div>

## Testing Hooks

```jsx
// hooks.test.js
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

---
layout: image-right
image: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop
---

# Hooks Migration Guide

Moving from class components to hooks

## Class Component

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
```

## Hook Version

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

::right::

## Migration Benefits

<div class="bg-green-50 p-6 rounded-lg">

### ✅ **Advantages of Hooks**
- **Less code** - No constructor, no this binding
- **Reusable logic** - Extract logic into custom hooks
- **Better testing** - Test hooks in isolation
- **Modern React** - Future-proof your code
- **Easier to understand** - Colocated logic

### 🔄 **Migration Strategy**
1. Start new components with hooks
2. Gradually migrate existing class components
3. Extract complex logic into custom hooks
4. Use React DevTools Profiler to identify optimization opportunities

<br>

<h4 class="font-bold">Common Patterns</h4>
- Replace `componentDidMount` with `useEffect`
- Replace `componentDidUpdate` with `useEffect` with dependencies
- Replace `componentWillUnmount` with cleanup function in `useEffect`
- Replace instance methods with functions defined inside the component

</div>

---
layout: center
class: text-center
---

# Next Steps

Continue your React learning journey

## What's Next?

<div class="grid grid-cols-3 gap-8 mt-12">

<div class="text-center">
  <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">⚛️</div>
  <h3 class="text-xl font-bold mb-2">React Hooks</h3>
  <p class="text-sm opacity-75">useEffect, useContext, custom hooks</p>
</div>

<div class="text-center">
  <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🔄</div>
  <h3 class="text-xl font-bold mb-2">State Management</h3>
  <p class="text-sm opacity-75">Redux, Zustand, Jotai</p>
</div>

<div class="text-center">
  <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🌐</div>
  <h3 class="text-xl font-bold mb-2">Full-Stack Apps</h3>
  <p class="text-sm opacity-75">Next.js, API integration</p>
</div>

</div>

## Practice Projects

<div class="mt-12 text-left max-w-2xl mx-auto">

1. **Todo App** - Lists, forms, state management
2. **Weather App** - API calls, loading states
3. **E-commerce Cart** - Complex state, calculations
4. **Blog Platform** - Routing, content management
5. **Real-time Chat** - WebSockets, real-time updates

</div>

<div class="mt-12 text-center">
  <a href="https://react.dev/learn" class="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4">
    📖 React Docs
  </a>
  <a href="https://react.dev/learn/tutorial-tic-tac-toe" class="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
    🎮 Tic-tac-toe Tutorial
  </a>
</div>

---
layout: center
class: text-center
---

# Thank You!

<div class="text-4xl mb-8">🎉</div>

## You've learned the fundamentals of React.js!

<div class="mt-8 text-xl">
  Start building amazing user interfaces with React
</div>

<div class="mt-12 grid grid-cols-2 gap-8 max-w-2xl mx-auto text-left">

<div>
  <h3 class="text-lg font-bold mb-2">📚 Resources</h3>
  <ul class="space-y-1 text-sm">
    <li>• <a href="https://react.dev/learn" class="text-blue-500">React Documentation</a></li>
    <li>• <a href="https://react.dev/learn/tutorial-tic-tac-toe" class="text-blue-500">Tic-tac-toe Tutorial</a></li>
    <li>• <a href="https://beta.reactjs.org/" class="text-blue-500">React Beta Docs</a></li>
  </ul>
</div>

<div>
  <h3 class="text-lg font-bold mb-2">🛠 Tools</h3>
  <ul class="space-y-1 text-sm">
    <li>• <a href="https://react.dev/learn" class="text-blue-500">React DevTools</a></li>
    <li>• <a href="https://vitejs.dev/" class="text-blue-500">Vite (Build Tool)</a></li>
    <li>• <a href="https://www.typescriptlang.org/" class="text-blue-500">TypeScript</a></li>
  </ul>
</div>

</div>

<div class="mt-12 text-center">
  <div class="text-2xl font-bold mb-4">Happy Coding! 🚀</div>
  <div class="text-sm opacity-75">Built with React.js</div>
</div>
