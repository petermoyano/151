import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

export function CraneHoist({ state }: { state: InteractionState }) {
  return (
    <group position={[0.4, 0, 0]}>
      <mesh position={[0, 7.55, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.46, 0.46, 1.25, 24]} />
        <PartMaterial color="#1f2d3a" state={state} metalness={0.52} roughness={0.32} />
      </mesh>
      <mesh position={[-0.84, 7.56, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.39, 0.32, 0.52, 20]} />
        <PartMaterial color="#52606d" state={state} />
      </mesh>
      <mesh position={[0.84, 7.56, 0]} castShadow>
        <boxGeometry args={[0.48, 0.82, 0.9]} />
        <PartMaterial color="#344352" state={state} />
      </mesh>
      {[-0.3, 0.3].map((x) => (
        <mesh key={x} position={[x, 7.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.12, 18]} />
          <PartMaterial color="#111820" state={state} metalness={0.68} roughness={0.28} />
        </mesh>
      ))}
    </group>
  );
}
