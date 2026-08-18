import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

export function CraneTrolley({ state }: { state: InteractionState }) {
  return (
    <group position={[0.4, 0, 0]}>
      <mesh position={[0, 7.95, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.45, 0.28, 2.05]} />
        <PartMaterial color="#44515f" state={state} />
      </mesh>
      <mesh position={[0, 8.17, 0]} castShadow>
        <boxGeometry args={[2.1, 0.18, 1.72]} />
        <PartMaterial color="#65717e" state={state} roughness={0.44} />
      </mesh>
      {[-0.83, 0.83].flatMap((x) =>
        [-0.72, 0.72].map((z) => (
          <mesh
            key={`${x}-${z}`}
            position={[x, 7.68, z]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.2, 0.2, 0.18, 18]} />
            <PartMaterial color="#151c24" state={state} metalness={0.7} roughness={0.3} />
          </mesh>
        )),
      )}
      <mesh position={[0.58, 8.55, 0.25]} castShadow>
        <boxGeometry args={[0.75, 0.56, 0.8]} />
        <PartMaterial color="#263340" state={state} />
      </mesh>
    </group>
  );
}
