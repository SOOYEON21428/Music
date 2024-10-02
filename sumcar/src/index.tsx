import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // TypeScript의 경우 null 체크 필요

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
