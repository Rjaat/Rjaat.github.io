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
      <div className="noise" />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-surface focus:rounded-lg focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
