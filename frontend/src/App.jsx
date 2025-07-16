import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterSetup from './router';

export default function App() {
  return (
    <Router>
      <RouterSetup />
    </Router>
  );
}
