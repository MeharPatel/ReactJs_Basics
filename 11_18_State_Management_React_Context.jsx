// State Management + React Context and Advanced Patterns
// Run in a React project with Tailwind CSS

import React, { createContext, useContext, useReducer } from 'react';

// Context API for Global State
const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  const setUser = (user) => dispatch({ type: 'SET_USER', payload: user });

  return (
    <UserContext.Provider value={{ user: state.user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="text-lg">{user ? `Welcome, ${user.name}` : 'No user'}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setUser({ name: 'Alice' })}
      >
        Login
      </button>
    </div>
  );
}

// Compound Components Pattern
const Card = ({ children }) => (
  <div className="border rounded-lg p-4 bg-white shadow-md">{children}</div>
);
Card.Header = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>;
Card.Body = ({ children }) => <div className="text-gray-600">{children}</div>;

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-4">
        <UserProfile />
        <Card>
          <Card.Header>Compound Component</Card.Header>
          <Card.Body>This is a compound component example.</Card.Body>
        </Card>
      </div>
    </UserProvider>
  );
}

// Best Practices
// Use Context API for lightweight global state.
// Use useReducer for complex state logic.
// Implement compound components for flexible UIs.
// Avoid overusing Context; prefer props for local data.
// Test state changes and patterns with React Testing Library.

export default App;