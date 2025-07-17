import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import './index.css';

const root = createRoot(document.getElementById('root'));
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // You can show a toast or banner to prompt refresh
    console.log('New content available, refresh the page');
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
});
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
       
      </Routes>
    </Router>
  </StrictMode>
);
