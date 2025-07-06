// React and GraphQL
// Requires `npm install @apollo/client graphql`

import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

// Apollo Client Setup
const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api', // Public GraphQL API
  cache: new InMemoryCache(),
});

// GraphQL Query
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

function UserProfile() {
  const { loading, error, data } = useQuery(GET_USER, { variables: { id: '1' } });

  if (loading) return <p className="text-lg">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-bold">{data.user.name}</h2>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
        <UserProfile />
      </div>
    </ApolloProvider>
  );
}

// Best Practices
// Use Apollo Client for GraphQL queries and mutations.
// Handle loading and error states explicitly.
// Use gql tag for query definitions.
// Test GraphQL queries with mock responses.
// Optimize queries to fetch only necessary data.

export default App;