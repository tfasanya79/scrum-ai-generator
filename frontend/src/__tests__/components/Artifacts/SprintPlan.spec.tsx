import { render, screen } from '@testing-library/react'
import SprintPlan from '../../../../components/Artifacts/SprintPlan'

describe('SprintPlan', () => {
  const mockPlan = {
    sprintLength: '2 weeks',
    ceremonies: [
      'Daily Standup',
      'Sprint Planning',
      'Retrospective'
    ]
  }

  it('displays sprint plan', () => {
    render(<SprintPlan plan={mockPlan} />)

    expect(screen.getByTestId('sprint-plan')).toBeInTheDocument()
    expect(screen.getByText('2 weeks')).toBeInTheDocument()
    expect(screen.getByText('Daily Standup')).toBeInTheDocument()
    expect(screen.getByTestId('ceremony-0')).toBeInTheDocument()
  })
})
