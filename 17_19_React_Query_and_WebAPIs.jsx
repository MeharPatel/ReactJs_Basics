// React Query and Data Fetching + React and Web APIs
// Requires `npm install @tanstack/react-query`

import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// React Query Setup
const queryClient = new QueryClient();

// Data Fetching with React Query
function Posts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
  });

  if (isLoading) return <p className="text-lg">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-bold">{data.title}</h2>
      <p className="text-gray-600">{data.body}</p>
    </div>
  );
}

// Web APIs (LocalStorage)
function ThemeToggle() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-4">
        <Posts />
        <ThemeToggle />
      </div>
    </QueryClientProvider>
  );
}

// Best Practices
// Use React Query for efficient data fetching and caching.
// Handle loading and error states explicitly.
// Use Web APIs like LocalStorage for client-side persistence.
// Mock fetch responses in tests for reliability.
// Test data fetching with various network conditions.

export default App;