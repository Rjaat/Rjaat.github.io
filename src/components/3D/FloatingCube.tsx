import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null!)
  const mesh2Ref = useRef<Mesh>(null!)
  const mesh3Ref = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
    
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x -= delta * 0.2
      mesh2Ref.current.rotation.z += delta * 0.4
      mesh2Ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.3
    }
    
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y += delta * 0.5
      mesh3Ref.current.rotation.z -= delta * 0.1
      mesh3Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.8
    }
  })

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
      
      {/* Main floating cube */}
      <mesh ref={meshRef} position={[3, 0, -8]} scale={0.8}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.4}
          wireframe
          emissive="#6366f1"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Secondary geometric shape */}
      <mesh ref={mesh2Ref} position={[-4, 2, -6]} scale={0.6}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          wireframe
          emissive="#8b5cf6"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Tertiary shape */}
      <mesh ref={mesh3Ref} position={[0, -3, -10]} scale={0.5}>
        <tetrahedronGeometry args={[1.2]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.35}
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}
          scale={0.1}
        >
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color={['#6366f1', '#8b5cf6', '#06b6d4'][i % 3]}
            transparent
            opacity={0.6}
            emissive={['#6366f1', '#8b5cf6', '#06b6d4'][i % 3]}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </>
  )
}

export default FloatingCube