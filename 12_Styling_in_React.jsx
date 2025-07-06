// Styling in React
// Requires Tailwind CSS (`npm install tailwindcss postcss autoprefixer`)
// Optional: `npm install styled-components`

import React from 'react';
import styled from 'styled-components'; // Uncomment if using styled-components

// CSS Modules (assumes styles.module.css)
// /* styles.module.css */
// .card { border: 1px solid #ccc; padding: 16px; border-radius: 8px; }
// import styles from './styles.module.css';

// Tailwind CSS
function Card() {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold">Tailwind Card</h2>
      <p className="text-gray-600">Styled with Tailwind CSS.</p>
    </div>
  );
}

// Styled-Components (commented, requires `npm install styled-components`)
// const StyledCard = styled.div`
//   border: 1px solid #ccc;
//   padding: 16px;
//   border-radius: 8px;
//   background: white;
// `;

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-4">
      <Card />
      {/* <StyledCard>Styled-Components Card</StyledCard> */}
    </div>
  );
}

// Best Practices
// Use Tailwind CSS for rapid, utility-first styling.
// Use CSS modules for scoped styles in smaller projects.
// Use styled-components for dynamic, component-based styles.
// Avoid inline styles for maintainability.
// Test styles with visual regression tools like Storybook.

export default App;