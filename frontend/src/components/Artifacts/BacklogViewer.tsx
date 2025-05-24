export default function BacklogViewer({ backlog }: {
  backlog: {
    epics: {
      title: string
      userStories: string[]
    }[]
  }
}) {
  return (
    <div
      className="backlog-viewer"
      aria-label="Product backlog"
      data-testid="backlog-viewer"
    >
      <h2>Product Backlog</h2>
      {backlog.epics.map((epic, index) => (
        <div key={index} data-testid={`epic-${index}`}>
          <h3>{epic.title}</h3>
          <ul>
            {epic.userStories.map((story, i) => (
              <li key={i} data-testid={`story-${index}-${i}`}>
                {story}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
