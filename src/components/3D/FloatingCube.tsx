import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 40
const CONNECTION_DIST = 6
const DEPTH = -12

function Nodes() {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3)
    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 + DEPTH
    }
    return pos
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <points ref={ref}>
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
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Connections() {
  const ref = useRef<THREE.LineSegments>(null!)
  const positions = useMemo(() => {
    const nodes: THREE.Vector3[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8 + DEPTH
        )
      )
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
    return new Float32Array(pairs)
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#06b6d4" transparent opacity={0.08} />
    </lineSegments>
  )
}

export default function FloatingCube() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <Nodes />
      <Connections />
    </>
  )
}
