"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";
import type { Group } from "three";

/* ─── Floating Background Sphere ─── */
function FloatingSphere({
  color,
  position,
  size = 0.12,
}: {
  color: string;
  position: [number, number, number];
  size?: number;
}) {
  return (
    <Float speed={1.5 + Math.random()} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.9} metalness={0} />
      </mesh>
    </Float>
  );
}

/* ─── The Character (loaded from OBJ) ─── */
function Character() {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();

  // Load OBJ model
  const obj = useLoader(OBJLoader, "/model/base.obj");

  // Load textures
  const [diffuse, normal, metallic, roughness] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const d = loader.load("/model/texture_diffuse.png");
    const n = loader.load("/model/texture_normal.png");
    const m = loader.load("/model/texture_metallic.png");
    const r = loader.load("/model/texture_roughness.png");

    // Flip textures for OBJ format
    [d, n, m, r].forEach((t) => {
      t.flipY = true;
      t.colorSpace = THREE.SRGBColorSpace;
    });
    // Normal map should be linear
    n.colorSpace = THREE.LinearSRGBColorSpace;
    m.colorSpace = THREE.LinearSRGBColorSpace;
    r.colorSpace = THREE.LinearSRGBColorSpace;

    return [d, n, m, r];
  }, []);

  // Apply PBR material to all meshes in the model
  const model = useMemo(() => {
    const clone = obj.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: diffuse,
          normalMap: normal,
          metalnessMap: metallic,
          roughnessMap: roughness,
          metalness: 0.1,
          roughness: 0.85,
          envMapIntensity: 0.5,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [obj, diffuse, normal, metallic, roughness]);

  // Calculate bounding box initially to center the model
  const { center, scale } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    // Scale so the model fits in roughly 2 units tall
    const s = 2 / maxDim;
    return { center: c, scale: s };
  }, [model]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Floating animation (slow up and down)
    groupRef.current.position.y = -center.y * scale + Math.sin(t * 0.6) * 0.06;

    // Subtle Y rotation
    const baseRotY = Math.sin(t * 0.3) * 0.04;

    // Mouse-reactive tilt
    const targetRotX = pointer.y * 0.06;
    const targetRotY = pointer.x * 0.1 + baseRotY;
    groupRef.current.rotation.x +=
      (targetRotX - groupRef.current.rotation.x) * 0.03;
    groupRef.current.rotation.y +=
      (targetRotY - groupRef.current.rotation.y) * 0.03;
  });

  return (
    <group
      ref={groupRef}
      scale={scale}
      position={[-center.x * scale, -center.y * scale, -center.z * scale]}
    >
      <primitive object={model} />
    </group>
  );
}

/* ─── Main Exported Scene ─── */
interface ClayCharacterSceneProps {
  bust?: boolean;
}

export default function ClayCharacterScene({
  bust = false,
}: ClayCharacterSceneProps) {
  return (
    <Canvas
      camera={{
        position: bust ? [0, 0.3, 2.2] : [0, 0.3, 3.5],
        fov: bust ? 30 : 35,
      }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      <directionalLight position={[-3, 2, -3]} intensity={0.4} color="#a78bfa" />
      {/* Rim light (behind character for glow outline) */}
      <pointLight position={[0, 2, -3]} intensity={1.5} color="#7c3aed" />
      {/* Fill light from below */}
      <pointLight position={[0, -2, 2]} intensity={0.3} color="#60a5fa" />

      <Character />

      {/* Floating background spheres */}
      {!bust && (
        <>
          <FloatingSphere color="#ef4444" position={[-1.5, 1.2, -1]} size={0.1} />
          <FloatingSphere color="#facc15" position={[1.6, 1.5, -0.8]} size={0.12} />
          <FloatingSphere color="#3b82f6" position={[-1.2, -0.3, -0.5]} size={0.09} />
          <FloatingSphere color="#22c55e" position={[1.3, -0.2, -0.7]} size={0.08} />
          <FloatingSphere color="#ef4444" position={[1.8, 0.5, -1.2]} size={0.06} />
          <FloatingSphere color="#a78bfa" position={[-1.7, 0.8, -1.5]} size={0.07} />
          <FloatingSphere color="#facc15" position={[-0.8, 1.6, -1.3]} size={0.05} />
          <FloatingSphere color="#3b82f6" position={[0.5, 1.8, -1.0]} size={0.08} />
        </>
      )}

      <Environment preset="studio" />
    </Canvas>
  );
}
