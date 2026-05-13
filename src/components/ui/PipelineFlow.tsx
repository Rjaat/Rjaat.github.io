const stageColors = [
  { dot: '#6c7ee0', line: 'rgba(108, 126, 224, 0.3)' },
  { dot: '#7c8cf0', line: 'rgba(124, 140, 240, 0.3)' },
  { dot: '#9ea8f5', line: 'rgba(158, 168, 245, 0.3)' },
  { dot: '#6c7ee0', line: 'rgba(108, 126, 224, 0.3)' },
  { dot: '#7c8cf0', line: 'rgba(124, 140, 240, 0.3)' },
  { dot: '#9ea8f5', line: 'rgba(158, 168, 245, 0.3)' },
  { dot: '#6c7ee0', line: 'rgba(108, 126, 224, 0.3)' },
  { dot: '#7c8cf0', line: 'rgba(124, 140, 240, 0.3)' },
  { dot: '#9ea8f5', line: 'rgba(158, 168, 245, 0.3)' },
]

export default function PipelineFlow({ steps }: { steps: string }) {
  const items = steps.split(' → ')

  return (
    <div className="flex flex-wrap gap-0">
      {items.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border"
            style={{
              borderColor: stageColors[i].line,
              background: `rgba(108, 126, 224, 0.04)`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: stageColors[i].dot }}
            />
            <span className="text-xs text-white/70 font-mono whitespace-nowrap">
              {step}
            </span>
          </div>
          {i < items.length - 1 && (
            <div className="flex items-center px-1.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3 1L7 5L3 9" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
