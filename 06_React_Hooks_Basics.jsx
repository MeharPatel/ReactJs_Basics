// React Hooks Basics
// Run in a React project with Tailwind CSS

import React, { useState, useEffect } from 'react';

// useState Hook
function Counter() {
  const [count, setCount] = useState(0);

  // useEffect Hook (Lifecycle)
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Effect ran");
  }, [count]);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-lg">Count: {count}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <Counter />
    </div>
  );
}

// Best Practices
// Follow rules of hooks: only call at top level, only in functional components.
// Use useEffect for side effects (e.g., data fetching, subscriptions).
// Specify dependencies in useEffect to avoid unnecessary runs.
// Test hooks with React Testing Library or @testing-library/react-hooks.

export default App;