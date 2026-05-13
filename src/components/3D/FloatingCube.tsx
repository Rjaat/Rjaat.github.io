import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 60
const CONNECTION_DIST = 5.5
const DEPTH = -12

function Network() {
  const groupRef = useRef<THREE.Group>(null!)
  const pointsRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)

  const { positions, connections } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3)
    const nodes: THREE.Vector3[] = []

    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 14
      const z = (Math.random() - 0.5) * 10 + DEPTH
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z
      nodes.push(new THREE.Vector3(x, y, z))
    }

    const pairs: number[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < CONNECTION_DIST) {
          pairs.push(nodes[i].x, nodes[i].y, nodes[i].z)
          pairs.push(nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }

    return {
      positions: pos,
      connections: new Float32Array(pairs),
    }
  }, [])

  const mouseTarget = useRef({ x: 0, y: 0 })

  useFrame((state, _delta) => {
    mouseTarget.current.x += (state.pointer.x * 0.3 - mouseTarget.current.x) * 0.03
    mouseTarget.current.y += (-state.pointer.y * 0.3 - mouseTarget.current.y) * 0.03

    if (groupRef.current) {
      groupRef.current.rotation.y += (mouseTarget.current.x - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (mouseTarget.current.y - groupRef.current.rotation.x) * 0.02
    }

    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial
      mat.size = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03
      mat.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }

    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial
      mat.opacity = 0.06 + Math.sin(state.clock.elapsedTime * 0.2) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color="#06b6d4"
          transparent
          opacity={0.5}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.06} />
      </lineSegments>
    </group>
  )
}

export default function FloatingCube() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Network />
    </>
  )
}
