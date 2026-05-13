import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <div className="fixed inset-0 -z-10 cyber-grid opacity-30 pointer-events-none" />
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
