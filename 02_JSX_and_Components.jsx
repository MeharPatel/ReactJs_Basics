// JSX and Components
// Run in a React project with Tailwind CSS (`npm install tailwindcss`)

import React from 'react';

// JSX Syntax: JavaScript + HTML-like syntax
function Welcome({ name }) {
  return <h1 className="text-2xl font-semibold">Hello, {name}!</h1>;
}

// Functional Component
function UserCard({ user }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}

// Component Composition
function App() {
  const user = { name: "Alice", email: "alice@example.com" };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Welcome name="User" />
      <UserCard user={user} />
    </div>
  );
}

// Best Practices
// Write JSX with single root elements.
// Use props for reusable, configurable components.
// Avoid inline styles; prefer CSS modules or Tailwind.
// Test components with different prop values.

export default App;