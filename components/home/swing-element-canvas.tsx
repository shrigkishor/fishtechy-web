"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState, useEffect, useCallback } from "react";
import * as THREE from "three";
import Image from "next/image";

function suppressClockWarning() {
  const orig = console.warn;
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
    orig.apply(console, args);
  };
  return () => { console.warn = orig; };
}

type PointerState = { x: number; y: number };

function SwingCard({ pointer }: { pointer: PointerState }) {
  const groupRef = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const texture = useTexture("/figma/swing-element.png");
  const geometry = useMemo(() => new THREE.PlaneGeometry(1.96, 1.31, 24, 24), []);

  useFrame((_state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    elapsed.current += delta;
    const t = elapsed.current;
    const targetX = pointer.y * 0.18 + Math.cos(t * 1.2) * 0.04;
    const targetY = pointer.x * 0.28 + Math.sin(t * 1.5) * 0.08;
    const targetZ = Math.sin(t * 1.8) * 0.06;
    const targetScale = 1 + Math.sin(t * 1.7) * 0.015;

    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.08);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.08);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, targetZ, 0.08);
    group.position.y = THREE.MathUtils.lerp(group.position.y, Math.sin(t * 1.3) * 0.06, 0.08);
    group.scale.setScalar(THREE.MathUtils.lerp(group.scale.x, targetScale, 0.08));
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshBasicMaterial map={texture} transparent toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function StaticFallback() {
  return (
    <Image
      src="/figma/b3c0135365c1e8aa3a2b191cec4563f014259fa1.png"
      alt="Fishtechy Patent Pending swing element"
      width={196}
      height={131}
      priority
      className="h-full w-full object-contain"
    />
  );
}

export function SwingElementCanvas() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const supported = !!(c.getContext("webgl2") || c.getContext("webgl"));
      setWebglSupported(supported);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  const onCreated = useCallback(() => {
    /* Canvas is ready — no-op, suppression handled below */
  }, []);

  useEffect(() => {
    if (!webglSupported) return;
    return suppressClockWarning();
  }, [webglSupported]);

  if (!webglSupported) {
    return <StaticFallback />;
  }

  return (
    <div
      className="swing-canvas"
      onPointerMove={(e) => {
        const b = e.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((e.clientX - b.left) / b.width) * 2 - 1,
          y: ((e.clientY - b.top) / b.height) * 2 - 1,
        });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <Suspense fallback={<StaticFallback />}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 2.4], fov: 32 }}
          gl={{ alpha: true, antialias: true }}
          onCreated={onCreated}
        >
          <SwingCard pointer={pointer} />
        </Canvas>
      </Suspense>
    </div>
  );
}
