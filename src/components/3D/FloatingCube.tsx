import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 100
const CONNECTION_DIST = 5
const DEPTH = -15

function Network({ scrollY = 0 }: { scrollY?: number }) {
  const groupRef = useRef<THREE.Group>(null!)
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, connections, colors } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3)
    const col = new Float32Array(NODE_COUNT * 3)
    const nodes: THREE.Vector3[] = []

    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 24
      const y = (Math.random() - 0.5) * 18
      const z = (Math.random() - 0.5) * 12 + DEPTH
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      const t = Math.random()
      col[i * 3] = 0.02 + t * 0.04
      col[i * 3 + 1] = 0.6 + t * 0.3
      col[i * 3 + 2] = 0.75 + t * 0.2

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

    return { positions: pos, connections: new Float32Array(pairs), colors: col }
  }, [])

  const mouseTarget = useRef({ x: 0, y: 0 })
  const scrollTarget = useRef(0)

  useFrame((state, _delta) => {
    mouseTarget.current.x += (state.pointer.x * 0.4 - mouseTarget.current.x) * 0.02
    mouseTarget.current.y += (-state.pointer.y * 0.4 - mouseTarget.current.y) * 0.02
    scrollTarget.current += (scrollY * 0.0003 - scrollTarget.current) * 0.03

    if (groupRef.current) {
      groupRef.current.rotation.y += (mouseTarget.current.x - groupRef.current.rotation.y) * 0.015
      groupRef.current.rotation.x += (mouseTarget.current.y - groupRef.current.rotation.x) * 0.015
      groupRef.current.position.y = -scrollTarget.current * 0.5
    }

    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial
      const pulse = Math.sin(state.clock.elapsedTime * 0.3) * 0.04 + 0.1
      mat.size = pulse
      mat.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1
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
          <bufferAttribute
            attach="attributes-color"
            count={NODE_COUNT}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.05} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

export default function FloatingCube({ scrollY }: { scrollY?: number }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Network scrollY={scrollY} />
    </>
  )
}
