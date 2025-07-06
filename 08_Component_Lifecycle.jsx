// Component Lifecycle
// Run in a React project with Tailwind CSS

import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  // Simulating componentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => setData(data.title))
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  // Simulating componentDidUpdate
  useEffect(() => {
    if (data) console.log("Data updated:", data);
  }, [data]);

  // Cleanup (componentWillUnmount)
  useEffect(() => {
    const timer = setInterval(() => console.log("Timer running"), 1000);
    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []);

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="text-lg">{data || "Loading..."}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <DataFetcher />
    </div>
  );
}

// Best Practices
// Use useEffect for side effects (e.g., data fetching, timers).
// Include cleanup functions to prevent memory leaks.
// Specify dependency arrays to control effect triggers.
// Test lifecycle behavior with mounting/unmounting scenarios.

export default App;