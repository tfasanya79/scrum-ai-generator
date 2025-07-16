import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateProjectDesign } from '../services/api';

export default function Home() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [projectGoal, setProjectGoal] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await generateProjectDesign({
        projectName,
        projectGoal,
        projectDescription
      });
      navigate('/result', { state: { design: response.design } });
    } catch (err) {
      setError('Failed to generate project design. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AI Scrum Project Design Generator</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            required
          />
        </label>
        <label>
          Project Goal/Target:
          <input
            type="text"
            value={projectGoal}
            onChange={e => setProjectGoal(e.target.value)}
            required
          />
        </label>
        <label>
          Brief Description:
          <textarea
            value={projectDescription}
            onChange={e => setProjectDescription(e.target.value)}
            rows={5}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Design'}
        </button>
      </form>
    </div>
  );
}
