// Server-Side Rendering (SSR)
// Run in a Next.js project (`npx create-next-app@latest`)
// Save as pages/index.jsx in Next.js

import React from 'react';

// SSR with getServerSideProps
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return { props: { post: data } };
}

function Post({ post }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h1 className="text-xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}

// Static Site Generation (SSG, commented)
// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await res.json();
//   return { props: { post: data } };
// }

function App({ post }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <Post post={post} />
    </div>
  );
}

// Best Practices
// Use Next.js for SSR to improve SEO and initial load time.
// Fetch data in getServerSideProps or getStaticProps.
// Optimize hydration by minimizing client-server mismatches.
// Test SSR with real-world APIs and edge cases.
// Use SSG for static content to reduce server load.

export default App;