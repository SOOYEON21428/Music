// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter를 import합니다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* 전체 앱을 BrowserRouter로 감쌉니다. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
