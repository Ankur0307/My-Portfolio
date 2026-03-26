"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Subtle mouse interaction
      meshRef.current.rotation.x += (state.pointer.y * 0.2 - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y += (state.pointer.x * 0.2 - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshTransmissionMaterial
          backside
          thickness={1}
          roughness={0.1}
          transmission={0.9}
          ior={1.2}
          chromaticAberration={0.03}
          color="#a78bfa"
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] opacity-40 lg:opacity-80 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} color="#7c3aed" intensity={2} />
        <pointLight position={[-5, -5, -5]} color="#a78bfa" intensity={1} />
        <FloatingShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
