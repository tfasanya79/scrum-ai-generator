
// src/App.tsx
import './App.css'
import ScrumGenerator from './components/ScrumGenerator'

function App() {
  return (
    <div data-testid="app-container">
      <h1>Scrum Generator</h1>
      <ScrumGenerator />
    </div>
  )
}

export default App

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectForm from './components/ProjectForm/ProjectForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div data-testid="app-container">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Scrum Generator</h1> {/* Changed from "Vite + React" */}
      <ProjectForm onSubmit={() => {}} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
 */
