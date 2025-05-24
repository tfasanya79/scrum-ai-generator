import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', {
      name: /scrum generator/i,
      level: 1
    })).toBeInTheDocument()
  })

  it('shows the project form', () => {
    render(<App />)
    expect(screen.getByTestId('project-form')).toBeInTheDocument()
  })

  it('displays Vite and React logos', () => {
    render(<App />)
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
  })
})
