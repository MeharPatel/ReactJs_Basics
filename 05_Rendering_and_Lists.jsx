// Rendering and Lists
// Run in a React project with Tailwind CSS

import React from 'react';

// Conditional Rendering
function Status({ isActive }) {
  return (
    <p className={`text-lg ${isActive ? 'text-green-600' : 'text-red-600'}`}>
      {isActive ? 'Active' : 'Inactive'}
    </p>
  );
}

// Rendering Lists
function ItemList({ items }) {
  return (
    <ul className="list-disc pl-6">
      {items.map(item => (
        <li key={item.id} className="text-gray-800">{item.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Status isActive={true} />
      <ItemList items={items} />
    </div>
  );
}

// Best Practices
// Use keys in lists to optimize rendering.
// Prefer ternary operators or && for simple conditional rendering.
// Avoid index as keys unless items are static and unordered.
// Test rendering with empty lists and edge cases.

export default App;