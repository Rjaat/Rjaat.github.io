export default function PipelineFlow({ steps }: { steps: string }) {
  const items = steps.split(' → ')

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {items.map((step, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          <span className="text-xs text-muted/90 border border-border/60 rounded-md px-2.5 py-1.5 leading-tight whitespace-nowrap">
            {step}
          </span>
          {i < items.length - 1 && (
            <span className="text-muted/30 text-xs select-none">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
