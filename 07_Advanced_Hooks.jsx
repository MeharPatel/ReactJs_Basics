// Advanced Hooks
// Run in a React project with Tailwind CSS

import React, { useContext, useReducer, useCallback } from 'react';

// useContext Hook
const ThemeContext = React.createContext({ theme: 'light' });

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}

// useReducer Hook
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-lg">Count: {state.count}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
    </div>
  );
}

// Custom Hook
function useTheme() {
  const [theme, setTheme] = useState('light');
  return { theme, setTheme };
}

function App() {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center space-y-4">
        <Counter />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

// Best Practices
// Use useContext for global state without prop drilling.
// Use useReducer for complex state logic (like Redux).
// Create custom hooks to reuse logic across components.
// Test hooks with realistic state changes and contexts.

export default App;