"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type PointerState = {
  x: number;
  y: number;
};

type SwingCardProps = {
  pointer: PointerState;
};

function SwingCard({ pointer }: SwingCardProps) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture("/figma/swing-element.png");

  const geometry = useMemo(() => new THREE.PlaneGeometry(1.96, 1.31, 24, 24), []);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const t = state.clock.getElapsedTime();
    const targetX = pointer.y * 0.18 + Math.cos(t * 1.2) * 0.04;
    const targetY = pointer.x * 0.28 + Math.sin(t * 1.5) * 0.08;
    const targetZ = Math.sin(t * 1.8) * 0.06;
    const targetScale = 1 + Math.sin(t * 1.7) * 0.015;

    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.08);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.08);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, targetZ, 0.08);
    group.position.y = THREE.MathUtils.lerp(group.position.y, Math.sin(t * 1.3) * 0.06, 0.08);
    group.scale.x = THREE.MathUtils.lerp(group.scale.x, targetScale, 0.08);
    group.scale.y = THREE.MathUtils.lerp(group.scale.y, targetScale, 0.08);
    group.scale.z = THREE.MathUtils.lerp(group.scale.z, targetScale, 0.08);
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshBasicMaterial map={texture} transparent toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function SwingElementCanvas() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });

  return (
    <div
      className="swing-canvas h-[116px] w-[174px] sm:h-[142px] sm:w-[212px] lg:h-[131px] lg:w-[196px]"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
        setPointer({ x, y });
      }}
      onPointerLeave={() => {
        setPointer({ x: 0, y: 0 });
      }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.4], fov: 32 }} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <SwingCard pointer={pointer} />
        </Suspense>
      </Canvas>
    </div>
  );
}
