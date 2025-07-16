export async function generateProjectDesign({ projectName, projectGoal, projectDescription }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000/api/generate';

  const response = await fetch(backendUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: projectName,
      goal: projectGoal,
      description: projectDescription
    })
  });

  if (!response.ok) {
    throw new Error('Failed to fetch project design');
  }

  return response.json(); // Expected to be { design: "..." }
}
