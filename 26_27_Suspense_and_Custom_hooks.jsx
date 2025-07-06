// React Suspense and Concurrent Rendering + Custom Hooks and Libraries
// Run in a React project with Tailwind CSS

import React, { Suspense, useState } from 'react';

// Custom Hook for Data Fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}

// Lazy-Loaded Component
const LazyComponent = React.lazy(() => import('./LazyComponent')); // Assumes LazyComponent.jsx exists

function DataDisplay() {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  if (loading) return <p className="text-lg">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-bold">{data.title}</h2>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<p className="text-lg">Loading Component...</p>}>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-4">
        <DataDisplay />
        <LazyComponent />
      </div>
    </Suspense>
  );
}

// Best Practices
// Use Suspense for lazy loading components or data.
// Create custom hooks for reusable logic (e.g., data fetching).
// Use concurrent rendering for better UX (React 18+).
// Test custom hooks with @testing-library/react-hooks.
// Publish custom hooks as npm packages for reuse.

export default App;