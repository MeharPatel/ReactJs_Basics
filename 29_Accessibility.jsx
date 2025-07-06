// Accessibility in React
// Run in a React project with Tailwind CSS

import React from 'react';

// Accessible Form
function AccessibleForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name" className="block text-gray-700">Name</label>
      <input
        id="name"
        type="text"
        aria-label="Enter your name"
        className="border rounded p-2 w-full"
        placeholder="Your name"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        aria-label="Submit form"
      >
        Submit
      </button>
    </form>
  );
}

// Accessible Navigation
function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex space-x-4">
        <li><a href="/" className="text-blue-500 hover:underline" aria-current="page">Home</a></li>
        <li><a href="/about" className="text-blue-500 hover:underline">About</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-4">
      <Nav />
      <AccessibleForm />
    </div>
  );
}

// Best Practices
// Use semantic HTML and ARIA attributes for accessibility.
// Ensure keyboard navigation with focusable elements.
// Test with screen readers (e.g., NVDA, VoiceOver).
// Use tools like axe-core for accessibility audits.
// Maintain high contrast and readable fonts (e.g., via Tailwind).

export default App;