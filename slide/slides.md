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
