import { render, screen } from '@testing-library/react'
import BacklogViewer from '../../../components/Artifacts/BacklogViewer'

describe('BacklogViewer', () => {
  const mockBacklog = {
    epics: [
      {
        title: 'User Authentication',
        userStories: [
          'As a user, I can register',
          'As a user, I can login'
        ]
      }
    ]
  }

  it('displays backlog items', () => {
    render(<BacklogViewer backlog={mockBacklog} />)

    expect(screen.getByTestId('backlog-viewer')).toBeInTheDocument()
    expect(screen.getByText('User Authentication')).toBeInTheDocument()
    expect(screen.getByText('As a user, I can register')).toBeInTheDocument()
    expect(screen.getByTestId('epic-0')).toBeInTheDocument()
    expect(screen.getByTestId('story-0-0')).toBeInTheDocument()
  })
})
