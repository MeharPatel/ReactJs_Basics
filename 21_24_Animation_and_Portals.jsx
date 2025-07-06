// Animation in React + React Portals
// Requires `npm install framer-motion`

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Portal for Modal
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg"
        initial={{ scale: 0.7, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.7, y: 50 }}
      >
        <h2 className="text-xl font-bold">Animated Modal</h2>
        <p className="text-gray-600 mt-2">This modal uses Framer Motion and portals.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>,
    document.getElementById('modal-root') // Assumes <div id="modal-root"></div> in index.html
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>
      <AnimatePresence>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </AnimatePresence>
    </div>
  );
}

// Best Practices
// Use Framer Motion for smooth animations with minimal code.
// Use portals for rendering modals/tooltips outside the main DOM tree.
// Ensure AnimatePresence for exit animations.
// Optimize animations by avoiding heavy transitions on low-end devices.
// Test animations and portals with React Testing Library.

export default App;