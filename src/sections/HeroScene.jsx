import { memo, useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Float,
  Html,
  Stars,
  OrbitControls, // <-- PresentationControls matti OrbitControls aakki
  ContactShadows,
} from '@react-three/drei'
import * as THREE from 'three'

const iconLabels = ['React Js', 'Node Js', 'MongoDb', 'Express Js', 'Three Js', 'Python', 'Flask', 'PHP', 'MySQL', ]

function Workstation() {
  const groupRef = useRef()
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640

  const icons = useMemo(
    () =>
      iconLabels.map((label, index) => {
        const angle = (index / iconLabels.length) * Math.PI * 2
        return {
          label,
          position: [
            Math.cos(angle) * 2.3,
            Math.sin(angle * 1.4) * 0.35 + 0.45,
            Math.sin(angle) * 2.3,
          ],
        }
      }),
    [],
  )

  // PresentationControls wrapper remove cheythu, pure group mathram
  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.45}>
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

        <mesh position={[0, -0.12, 0.38]}>
          <boxGeometry args={[1.25, 0.06, 0.5]} />
          <meshStandardMaterial
            color="#121217"
            emissive="#4a0007"
            roughness={0.25}
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

      {!isMobile &&
        icons.map((item) => (
          <Float key={item.label} speed={1.1} floatIntensity={0.45}>
            <Html center position={item.position} transform distanceFactor={5}>
              <span className="skill-orbit">{item.label}</span>
            </Html>
          </Float>
        ))}
    </group>
  )
}

function HeroSceneComponent() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const particleCount = isMobile ? 28 : 96

  return (
    <Canvas
      className="hero-canvas"
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      camera={{ position: [0, 1.1, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#020203']} />
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 4, 4]} color="#ff2038" intensity={70} />
      <spotLight
        position={[-3, 3.5, 2.5]}
        angle={0.4}
        penumbra={1}
        color="#ff4b55"
        intensity={80}
      />

      <Stars
        radius={30}
        depth={14}
        count={particleCount}
        factor={2.2}
        saturation={0}
        fade
        speed={0.3}
      />

      {/* OrbitControls Canvas-il add cheythu */}
      <OrbitControls 
        autoRotate={true}         // Automatic aayi thiriyan
        autoRotateSpeed={1.5}     // Rotation speed adjust cheyyam
        enableZoom={false}        // Scroll cheyumbol zoom aavathirikkan
        enablePan={false}         // Model position move aavathirikkan
        minPolarAngle={Math.PI/3} // Mukkallil ninnu over aayi thazhekku nokkathirikan
        maxPolarAngle={Math.PI/2} // Thazhe ninnu mukalilekku over aayi nokkathirikan
      />

      <Workstation />

      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.4}
        scale={8}
        blur={2}
      />
    </Canvas>
  )
}

export default memo(HeroSceneComponent)