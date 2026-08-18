import { useMemo } from "react";
import { CatmullRomCurve3, Vector3 } from "three";
import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

export function CraneHook({ state }: { state: InteractionState }) {
  const hookCurve = useMemo(
    () =>
      new CatmullRomCurve3([
        new Vector3(0, 0.15, 0),
        new Vector3(0, -0.35, 0),
        new Vector3(0.08, -0.82, 0),
        new Vector3(0.4, -1.08, 0),
        new Vector3(0.76, -0.98, 0),
        new Vector3(0.9, -0.64, 0),
        new Vector3(0.72, -0.38, 0),
        new Vector3(0.48, -0.42, 0),
      ]),
    [],
  );

  return (
    <group position={[0.4, 2.33, 0]} scale={0.78}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.94, 0.58, 0.58]} />
        <PartMaterial color="#b9b49f" state={state} metalness={0.72} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.31, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.32, 20]} />
        <PartMaterial color="#5e6974" state={state} metalness={0.7} roughness={0.28} />
      </mesh>
      <mesh position={[-0.12, -0.46, 0]} castShadow>
        <tubeGeometry args={[hookCurve, 32, 0.12, 12, false]} />
        <PartMaterial color="#c5bfaa" state={state} metalness={0.78} roughness={0.26} />
      </mesh>
      <mesh position={[0.24, -0.55, 0]} rotation={[0, 0, -0.72]} castShadow>
        <boxGeometry args={[0.08, 0.6, 0.1]} />
        <PartMaterial
          color="#d2a23a"
          state={state}
          metalness={0.58}
          roughness={0.34}
        />
      </mesh>
      <mesh position={[0.02, -0.31, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.14, 14]} />
        <PartMaterial color="#596571" state={state} metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}
