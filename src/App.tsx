import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import FloatingCube from './components/3D/FloatingCube'

function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <div className="fixed inset-0 -z-10 cyber-grid opacity-40" />
      <div className="fixed inset-0 -z-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <FloatingCube />
          </Suspense>
        </Canvas>
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
