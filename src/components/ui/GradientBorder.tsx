import { ReactNode } from 'react'

export default function GradientBorder({ children }: { children: ReactNode }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700" />
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
      {children}
    </div>
  )
}
