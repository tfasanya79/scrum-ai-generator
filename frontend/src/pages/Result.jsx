import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.design) {
    return (
      <div className="container">
        <p>No design data available. Please generate a design first.</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Project Design Result</h1>
      <pre className="design-output">{state.design}</pre>
      <button onClick={() => navigate('/')}>Generate Another</button>
    </div>
  );
}
