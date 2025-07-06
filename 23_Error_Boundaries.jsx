// Error Boundaries
// Run in a React project with Tailwind CSS

import React, { Component } from 'react';

// Error Boundary Class
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="border rounded-lg p-4 bg-red-100 text-red-600">
          <h2 className="text-xl font-bold">Something went wrong!</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Component with Potential Error
function BuggyComponent() {
  const [crash, setCrash] = React.useState(false);
  if (crash) throw new Error('Crashed!');

  return (
    <button
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={() => setCrash(true)}
    >
      Trigger Error
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

// Best Practices
// Use error boundaries to catch rendering errors in components.
// Log errors to a service (e.g., Sentry) for monitoring.
// Place error boundaries at appropriate levels in the component tree.
// Test error boundaries with intentional errors.
// Avoid using error boundaries for control flow.

export default App;