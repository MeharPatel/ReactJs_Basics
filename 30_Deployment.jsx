// React Deployment and CI/CD
// Run in a React project with Tailwind CSS
// Deploy with Vercel/Netlify or setup CI/CD with GitHub Actions

import React from 'react';

// Sample App for Deployment
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="border rounded-lg p-4 bg-white">
        <h1 className="text-xl font-bold">Deployed React App</h1>
        <p className="text-gray-600">Ready for Vercel or Netlify.</p>
      </div>
    </div>
  );
}

// Deployment Steps (Vercel):
// 1. Push to GitHub
// 2. Connect repo to Vercel (vercel.com)
// 3. Configure build settings (e.g., `npm run build`)
// 4. Deploy automatically on push

// GitHub Actions CI/CD (conceptual, save as .github/workflows/ci.yml):
/*
name: CI/CD
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '18' }
      - run: npm install
      - run: npm test
      - run: npm run build
*/

// Best Practices
// Optimize production builds with `npm run build`.
// Use Vercel or Netlify for simple React deployments.
// Set up CI/CD with GitHub Actions for testing and deployment.
// Test builds locally before deploying.
// Monitor deployed apps with analytics (e.g., Vercel Analytics).

export default App;