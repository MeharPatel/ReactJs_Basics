// State and Props
// Run in a React project with Tailwind CSS

import React, { useState } from 'react';

// Managing State with useState
function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

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

// Prop Drilling Example
function UserProfile({ user }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <UserInfo user={user} />
    </div>
  );
}

function UserInfo({ user }) {
  return <p className="text-gray-600">{user.name} ({user.email})</p>;
}

function App() {
  const user = { name: "Bob", email: "bob@example.com" };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Counter initialCount={5} />
      <UserProfile user={user} />
    </div>
  );
}

// Best Practices
// Use useState for local component state.
// Validate props with default values or PropTypes.
// Avoid deep prop drilling; consider Context API for global data.
// Test state changes and prop passing with Jest.

export default App;