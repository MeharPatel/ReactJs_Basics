// Progressive Web Apps (PWAs) with React
// Run in a React project with Tailwind CSS
// Requires service worker registration (e.g., via Workbox)

import React, { useEffect } from 'react';

// Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker Registered', reg))
      .catch(err => console.error('Service Worker Error:', err));
  }
}

// sw.js (conceptual):
/*
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll(['/', '/index.html']))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request) || fetch(event.request));
});
*/

// Web App Manifest (conceptual, save as public/manifest.json):
/*
{
  "name": "My PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f3f4f6",
  "icons": [{ "src": "/icon.png", "sizes": "192x192", "type": "image/png" }]
}
*/

function App() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="border rounded-lg p-4 bg-white">
        <h1 className="text-xl font-bold">PWA Demo</h1>
        <p className="text-gray-600">This app supports offline mode.</p>
      </div>
    </div>
  );
}

// Best Practices
// Use Workbox for easier service worker management.
// Include a manifest.json for installable PWAs.
// Cache critical assets for offline support.
// Test PWA functionality with Lighthouse.
// Ensure HTTPS in production for service workers.

export default App;