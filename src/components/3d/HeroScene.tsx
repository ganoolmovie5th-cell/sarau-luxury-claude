'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Environment, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// ── Single tree ──────────────────────────────────────────────────────────────
function Tree({ position, scale = 1, color = '#2D6A4F' }: {
  position: [number, number, number]
  scale?: number
  color?: string
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    // gentle sway
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.03
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 8]} />
        <meshStandardMaterial color="#5D3A1A" roughness={0.9} />
      </mesh>
      {/* Bottom foliage */}
      <mesh position={[0, 0.2, 0]}>
        <coneGeometry args={[0.7, 1.4, 7]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      {/* Mid foliage */}
      <mesh position={[0, 0.9, 0]}>
        <coneGeometry args={[0.5, 1.2, 7]} />
        <meshStandardMaterial color={new THREE.Color(color).addScalar(0.05).getStyle()} roughness={0.7} />
      </mesh>
      {/* Top foliage */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.3, 0.9, 7]} />
        <meshStandardMaterial color={new THREE.Color(color).addScalar(0.1).getStyle()} roughness={0.7} />
      </mesh>
    </group>
  )
}

// ── Ground plane ─────────────────────────────────────────────────────────────
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#1B4332" roughness={0.9} />
    </mesh>
  )
}

// ── Fireflies ─────────────────────────────────────────────────────────────────
function Fireflies() {
  const count = 60
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = Math.random() * 4 - 1
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.elapsedTime
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] = (Math.sin(t * 0.8 + i * 0.3) * 0.5) + (positions[i * 3 + 1])
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.slice(), 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#D4F7A0" transparent opacity={0.9} sizeAttenuation />
    </points>
  )
}

// ── Floating mist orbs ────────────────────────────────────────────────────────
function MistOrb({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={0.4} floatIntensity={0.5} rotationIntensity={0.1}>
      <mesh position={position}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <MeshDistortMaterial
          color="#95D5B2"
          distort={0.2}
          speed={0.5}
          transparent
          opacity={0.07}
          roughness={1}
        />
      </mesh>
    </Float>
  )
}

// ── Moon ──────────────────────────────────────────────────────────────────────
function Moon() {
  return (
    <Float speed={0.2} floatIntensity={0.3}>
      <mesh position={[4, 3.5, -4]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#E8F4F8" emissive="#C8E6F0" emissiveIntensity={0.5} roughness={0.8} />
      </mesh>
    </Float>
  )
}

// ── Forest scene ──────────────────────────────────────────────────────────────
function ForestScene() {
  const trees: Array<{ pos: [number, number, number]; scale: number; color: string }> = [
    { pos: [-5,  -1.5, -3], scale: 1.3, color: '#1B4332' },
    { pos: [-3.5,-1.5, -4], scale: 1.6, color: '#2D6A4F' },
    { pos: [-2,  -1.5, -5], scale: 1.1, color: '#1B4332' },
    { pos: [0.5, -1.5, -5], scale: 1.4, color: '#40916C' },
    { pos: [2.5, -1.5, -4], scale: 1.5, color: '#2D6A4F' },
    { pos: [4,   -1.5, -3], scale: 1.2, color: '#1B4332' },
    { pos: [5.5, -1.5, -4], scale: 1.7, color: '#40916C' },
    { pos: [-6.5,-1.5, -2], scale: 1.0, color: '#2D6A4F' },
    { pos: [6,   -1.5, -2], scale: 1.1, color: '#1B4332' },
    // mid-ground
    { pos: [-4,  -2,   -1], scale: 0.9, color: '#52B788' },
    { pos: [-1.5,-2,   -2], scale: 0.8, color: '#40916C' },
    { pos: [1,   -2,   -2], scale: 1.0, color: '#52B788' },
    { pos: [3.5, -2,   -1], scale: 0.85,color: '#2D6A4F' },
    // foreground smalls
    { pos: [-7,  -2.2,  1], scale: 0.6, color: '#74C69D' },
    { pos: [7,   -2.2,  1], scale: 0.65,color: '#52B788' },
  ]

  return (
    <>
      {trees.map(({ pos, scale, color }, i) => (
        <Tree key={i} position={pos} scale={scale} color={color} />
      ))}
    </>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      shadows
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#B7E4C7" />
      <pointLight position={[4, 3, 3]}   intensity={1.2} color="#D4F7A0" />
      <pointLight position={[-6, 4, -2]} intensity={0.8} color="#95D5B2" />
      <pointLight position={[0, -1, 2]}  intensity={0.4} color="#52B788" />
      <directionalLight position={[3, 8, 2]} intensity={0.6} color="#B7E4C7" castShadow />

      {/* Scene */}
      <Ground />
      <ForestScene />
      <Moon />
      <Fireflies />

      {/* Mist */}
      <MistOrb position={[-3, -1, 0]} />
      <MistOrb position={[3, -1.5, 1]} />
      <MistOrb position={[0, -0.5, -2]} />

      {/* Stars through tree canopy */}
      <Stars radius={60} depth={40} count={800} factor={2.5} saturation={0} fade speed={0.3} />

      {/* Atmospheric fog via scene.fog */}
      <fog attach="fog" args={['#0D2818', 12, 35]} />

      <Environment preset="forest" />
    </Canvas>
  )
}
