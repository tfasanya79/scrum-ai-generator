import { useState } from 'react'

export default function ProjectForm({ onSubmit }: {
  onSubmit: (data: {
    name: string
    target: string
    description: string
  }) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    target: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Project details form"
      data-testid="project-form"
    >
      <div className="form-group">
        <label htmlFor="project-name">Project Name</label>
        <input
          id="project-name"
          type="text"
          aria-label="Project name"
          data-testid="project-name-input"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="project-target">Project Target</label>
        <input
          id="project-target"
          type="text"
          aria-label="Project target"
          data-testid="project-target-input"
          value={formData.target}
          onChange={(e) => setFormData({...formData, target: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          aria-label="Project description"
          data-testid="project-description-textarea"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
      </div>

      <button
        type="submit"
        aria-label="Generate scrum framework"
        data-testid="generate-button"
      >
        Generate
      </button>
    </form>
  )
}
