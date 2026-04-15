import { memo, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Float,
  Html,
  Stars,
  OrbitControls,
  ContactShadows,
} from '@react-three/drei'
import * as THREE from 'three'

const iconLabels = [
  'React Js',
  'Node Js',
  'MongoDb',
  'Express Js',
  'Three Js',
  'Python',
  'Flask',
  'PHP',
  'MySQL',
]

function Workstation() {
  const isMobile = window.innerWidth < 640

  const icons = useMemo(() => {
    return iconLabels.map((label, index) => {
      const angle = (index / iconLabels.length) * Math.PI * 2
      const radius = isMobile ? 1.9 : 2.4
      const height = isMobile ? 0.3 : 0.5

      return {
        label,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 1.2) * 0.35 + height,
          Math.sin(angle) * radius,
        ],
      }
    })
  }, [isMobile])

  return (
    <group
      scale={isMobile ? 0.72 : 1}
      position={[0, isMobile ? -0.2 : 0, 0]}
    >
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.35}>
        <mesh position={[0, -0.35, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[2.25, 0.08, 1.35]} />
          <meshStandardMaterial
            color="#1a0508"
            emissive="#3b0509"
            roughness={0.32}
            metalness={0.5}
          />
        </mesh>

        <mesh position={[0, 0.16, -0.36]} rotation={[-0.14, 0, 0]}>
          <boxGeometry args={[1.65, 0.88, 0.06]} />
          <meshStandardMaterial
            color="#08090d"
            emissive="#75000b"
            emissiveIntensity={0.8}
            metalness={0.35}
          />
        </mesh>

        <mesh position={[0, 0.18, -0.31]}>
          <planeGeometry args={[1.38, 0.68]} />
          <meshBasicMaterial
            color="#ff1c37"
            transparent
            opacity={0.18}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh position={[0, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.01, 16, 100]} />
          <meshBasicMaterial
            color="#ff2138"
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      {icons.map((item) => (
        <Float key={item.label} speed={1} floatIntensity={0.35}>
          <Html
            center
            position={item.position}
            transform
            distanceFactor={isMobile ? 7 : 5}
          >
            <span className="skill-orbit">{item.label}</span>
          </Html>
        </Float>
      ))}
    </group>
  )
}

function HeroSceneComponent() {
  const isMobile = window.innerWidth < 640
  const particleCount = isMobile ? 18 : 72

  return (
    <Canvas
      className="hero-canvas"
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      camera={{
        position: isMobile ? [0, 1, 6.8] : [0, 1.1, 5.2],
        fov: isMobile ? 50 : 42,
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#020203']} />
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 4, 4]} color="#ff2038" intensity={60} />

      <spotLight
        position={[-3, 3.5, 2.5]}
        angle={0.4}
        penumbra={1}
        color="#ff4b55"
        intensity={70}
      />

      <Stars
        radius={28}
        depth={12}
        count={particleCount}
        factor={2}
        saturation={0}
        fade
        speed={0.25}
      />

      <OrbitControls
        autoRotate
        autoRotateSpeed={isMobile ? 0.35 : 0.6}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
      />

      <Workstation />

      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.35}
        scale={8}
        blur={2}
      />
    </Canvas>
  )
}

export default memo(HeroSceneComponent)