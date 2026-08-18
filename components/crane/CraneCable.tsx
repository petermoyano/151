import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

export function CraneCable({ state }: { state: InteractionState }) {
  return (
    <group position={[0.4, 0, 0]}>
      {[-0.24, 0.24].map((x) => (
        <mesh key={x} position={[x, 4.75, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 4.55, 10]} />
          <PartMaterial color="#77818a" state={state} metalness={0.85} roughness={0.25} />
        </mesh>
      ))}
    </group>
  );
}
