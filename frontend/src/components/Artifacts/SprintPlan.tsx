export default function SprintPlan({ plan }: {
  plan: {
    sprintLength: string
    ceremonies: string[]
  }
}) {
  return (
    <div
      className="sprint-plan"
      aria-label="Sprint plan"
      data-testid="sprint-plan"
    >
      <h2>Sprint Plan</h2>
      <p data-testid="sprint-length">
        <strong>Sprint Length:</strong> {plan.sprintLength}
      </p>
      <h3>Ceremonies:</h3>
      <ul>
        {plan.ceremonies.map((ceremony, i) => (
          <li key={i} data-testid={`ceremony-${i}`}>
            {ceremony}
          </li>
        ))}
      </ul>
    </div>
  )
}
