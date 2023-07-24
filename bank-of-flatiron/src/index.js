import React from 'react';
import { createRoot } from 'react-dom/client';
import './TransactionTable.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './TransactionForm.css';
import './SearchBar.css';

const root = createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
