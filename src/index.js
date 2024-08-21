import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated method for React 18+
import './index.css';
import Form from './form.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18+ syntax
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);
