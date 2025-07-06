// React and TypeScript
// Run in a React project with TypeScript (`npx create-react-app my-app --template typescript`)
// Requires `npm install @types/react @types/react-dom`

import React, { useState } from 'react';

// Type-Safe Props
interface User {
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

// Type-Safe Hook
function useCounter(initialCount: number = 0) {
  const [count, setCount] = useState<number>(initialCount);

  return { count, increment: () => setCount(count + 1) };
}

function Counter() {
  const { count, increment } = useCounter(5);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-lg">Count: {count}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}

const App: React.FC = () => {
  const user: User = { name: 'Alice', email: 'alice@example.com' };
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-4">
      <Counter />
      <UserCard user={user} />
    </div>
  );
};

// Best Practices
// Define interfaces for props and state.
// Use React.FC for type-safe functional components.
// Install @types packages for third-party libraries.
// Compile with strict mode in tsconfig.json.
// Test TypeScript components with Jest and ts-jest.

export default App;