import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectForm from '../../components/ProjectForm/ProjectForm'

describe('ProjectForm', () => {
  const mockSubmit = jest.fn()

  beforeEach(() => {
    render(<ProjectForm onSubmit={mockSubmit} />)
  })

  it('renders all form fields', () => {
    expect(screen.getByTestId('project-name-input')).toBeInTheDocument()
    expect(screen.getByTestId('project-target-input')).toBeInTheDocument()
    expect(screen.getByTestId('project-description-textarea')).toBeInTheDocument()
    expect(screen.getByTestId('generate-button')).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    fireEvent.click(screen.getByTestId('generate-button'))
    expect(await screen.findAllByText(/required/i)).toHaveLength(3)
  })

  it('submits valid data', async () => {
    await userEvent.type(
      screen.getByTestId('project-name-input'),
      'E-Commerce Platform'
    )
    await userEvent.type(
      screen.getByTestId('project-target-input'),
      'Build online store'
    )
    await userEvent.type(
      screen.getByTestId('project-description-textarea'),
      'React frontend with Node backend'
    )

    fireEvent.click(screen.getByTestId('generate-button'))

    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'E-Commerce Platform',
      target: 'Build online store',
      description: 'React frontend with Node backend'
    })
  })
})
