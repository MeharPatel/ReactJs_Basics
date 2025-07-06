// Introduction to React.js
// Run in a React project: `npx create-react-app my-app` or `npm create vite@latest`

import React from 'react';

// What is React.js?
// React is a JavaScript library for building user interfaces, using a component-based architecture.
// It uses a Virtual DOM to optimize updates and improve performance.

// Component Example
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to React.js!</h1>
      <p className="mt-4 text-lg">This is a basic React component using Tailwind CSS.</p>
    </div>
  );
}

// Best Practices
// Use functional components over class components for simplicity.
// Organize projects with Create React App or Vite for modern tooling.
// Leverage Virtual DOM for efficient updates; avoid direct DOM manipulation.
// Test React setup with simple components before scaling.

export default App;