import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import ShopProvider from './Context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ShopProvider>
      <App />
    </ShopProvider>
  </Router>
);
