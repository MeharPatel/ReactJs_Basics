// Routing with React Router
// Requires `npm install react-router-dom`

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Route Components
function Home() {
  return <h1 className="text-2xl font-bold">Home Page</h1>;
}

function About({ name }) {
  return <h1 className="text-2xl font-bold">About {name}</h1>;
}

function User({ userId }) {
  return <h1 className="text-2xl font-bold">User ID: {userId}</h1>;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="space-x-4 mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/about/Alice" className="text-blue-500 hover:underline">About</Link>
          <Link to="/user/123" className="text-blue-500 hover:underline">User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

// Best Practices
// Use BrowserRouter for client-side routing.
// Leverage dynamic routes with URL parameters.
// Organize routes in a separate file for large apps.
// Test navigation with React Testing Library.

export default App;