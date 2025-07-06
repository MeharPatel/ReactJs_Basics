// React Performance Optimization
// Run in a React project with Tailwind CSS

import React, { useState, useMemo, useCallback } from 'react';

// Memoization with React.memo
const ExpensiveComponent = React.memo(({ value }) => {
  console.log("ExpensiveComponent rendered");
  return <p className="text-lg">Value: {value}</p>;
});

// useMemo and useCallback
function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) sum += i;
    return sum + count;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="text-lg">Count: {count}</p>
      <p className="text-lg">Expensive Calc: {expensiveCalculation}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Increment Count
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 ml-2"
        onClick={() => setOtherState(otherState + 1)}
      >
        Update Other State
      </button>
      <ExpensiveComponent value={count} />
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
// Use React.memo to prevent unnecessary component re-renders.
// Use useMemo for expensive calculations.
// Use useCallback for functions passed as props.
// Profile performance with React DevTools Profiler.
// Test optimizations with heavy workloads and state changes.

export default App;