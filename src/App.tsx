import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(6, 182, 212, 0.04), transparent 60%)`,
      }}
    />
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <div className="fixed inset-0 -z-10 cyber-grid opacity-30 pointer-events-none" />
      <CursorGlow />
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Contact />
    </div>
  )
}

export default App
