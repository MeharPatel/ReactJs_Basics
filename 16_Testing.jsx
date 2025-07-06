// Testing React Applications
// Requires `npm install jest @testing-library/react @testing-library/jest-dom`

import React, { useState } from 'react';

// Component to Test
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center space-x-4">
      <p data-testid="count" className="text-lg">Count: {count}</p>
      <button
        data-testid="increment"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

// Jest Test (save as Counter.test.jsx):
/*
import { render, screen, fireEvent } from '@testing-library/react';
test('increments count', () => {
  render(<Counter />);
  const button = screen.getByTestId('increment');
  const count = screen.getByTestId('count');
  expect(count.textContent).toBe('Count: 0');
  fireEvent.click(button);
  expect(count.textContent).toBe('Count: 1');
});
*/

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <Counter />
    </div>
  );
}

// Best Practices
// Use React Testing Library for DOM-based testing.
// Add data-testid attributes for reliable queries.
// Test user interactions with fireEvent.
// Mock APIs with jest.mock for data fetching.
// Run tests with `npm test` in CI/CD pipelines.

export default App;