// Forms in React
// Run in a React project with Tailwind CSS
// Optional: `npm install formik` for Formik example

import React, { useState } from 'react';

// Controlled Component
function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}

// Formik Example (commented, requires `npm install formik`)
// import { Formik, Form, Field } from 'formik';
// function FormikForm() {
//   return (
//     <Formik initialValues={{ email: '' }} onSubmit={values => console.log(values)}>
//       <Form>
//         <Field name="email" type="email" className="border rounded p-2" />
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
//       </Form>
//     </Formik>
//   );
// }

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <LoginForm />
    </div>
  );
}

// Best Practices
// Use controlled components for predictable form state.
// Validate inputs before submission.
// Consider Formik or React Hook Form for complex forms.
// Test forms with valid and invalid inputs.

export default App;