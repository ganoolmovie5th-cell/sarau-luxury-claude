'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Float, Stars, MeshDistortMaterial, Environment, Trail } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb({ position, color, speed = 1, scale = 1 }: {
  position: [number, number, number]
  color: string
  speed?: number
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
  })

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const count = 200
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#95D5B2" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function AnimatedRing() {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ringRef.current) return
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.15
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
  })

  return (
    <mesh ref={ringRef} position={[0, 0, -2]}>
      <torusGeometry args={[4, 0.04, 16, 100]} />
      <meshStandardMaterial color="#40916C" transparent opacity={0.4} />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#95D5B2" />
      <pointLight position={[-10, -5, -5]} intensity={0.8} color="#F4A261" />
      <pointLight position={[0, 10, 0]} intensity={0.6} color="#2D6A4F" />

      <FloatingOrb position={[-3, 1, 0]}  color="#2D6A4F" speed={0.8} scale={1.5} />
      <FloatingOrb position={[3, -1, -1]} color="#40916C" speed={1.2} scale={1.0} />
      <FloatingOrb position={[1, 2.5, -2]} color="#95D5B2" speed={0.6} scale={0.7} />
      <FloatingOrb position={[-2, -2, 1]} color="#F4A261" speed={1.5} scale={0.5} />

      <AnimatedRing />
      <ParticleField />

      <Stars
        radius={80}
        depth={50}
        count={1000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <Environment preset="forest" />
    </Canvas>
  )
}
