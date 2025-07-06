// Event Handling
// Run in a React project with Tailwind CSS

import React, { useState } from 'react';

// Handling User Events
function Button() {
  const [message, setMessage] = useState("Click me!");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <button
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      onClick={handleClick}
    >
      {message}
    </button>
  );
}

// Synthetic Events
function Input() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      className="border rounded p-2 mt-4"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Type something"
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <Button />
      <Input />
    </div>
  );
}

// Best Practices
// Use arrow functions or named handlers for events.
// Leverage synthetic events for consistent behavior across browsers.
// Avoid inline event handlers for better performance.
// Test event handlers with React Testing Library.

export default App;