#!/bin/bash

echo "Setting up React + Vite frontend files..."

mkdir -p src/pages

# main.tsx
cat > src/main.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
EOF

# App.tsx
cat > src/App.tsx << 'EOF'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
EOF

# Home.tsx
cat > src/pages/Home.tsx << 'EOF'
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [projectGoal, setProjectGoal] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName, projectGoal, projectDesc }),
      });

      if (!response.ok) throw new Error('Failed to generate design');

      const data = await response.json();
      setResult(data.design);
    } catch (error) {
      setResult('Error generating design. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '2rem' }}>
      <h1>AI Scrum Project Design Generator</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </label>
        <label>
          Project Target / Goal:
          <input
            type="text"
            value={projectGoal}
            onChange={(e) => setProjectGoal(e.target.value)}
            required
          />
        </label>
        <label>
          Brief Description:
          <textarea
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            rows={5}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Design'}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', background: '#f0f0f0', padding: '1rem', borderRadius: 4 }}>
          <h2>Generated Project Design</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
EOF

# index.css
cat > src/index.css << 'EOF'
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  background: #fafafa;
  color: #333;
}

input, textarea, button {
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #999;
  cursor: not-allowed;
}
EOF

echo "Setup complete! Run 'npm install' and then 'npm run dev' to start your frontend."
