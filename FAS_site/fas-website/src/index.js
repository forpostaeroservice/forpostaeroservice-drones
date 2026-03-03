import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react"
import './styles/index.css'; // Make sure this path is exactly right
import App from './App';
import './i18n';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>      
      <Analytics />
  </React.StrictMode>
);