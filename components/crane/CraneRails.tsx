import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

const COLUMN_Z_POSITIONS = [-9, -4.5, 0, 4.5, 9];

export function CraneRails({ state }: { state: InteractionState }) {
  return (
    <group>
      {[-6.5, 6.5].map((x) => (
        <group key={x}>
          <mesh position={[x, 6.15, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.65, 0.75, 19.5]} />
            <PartMaterial color="#465260" state={state} />
          </mesh>
          <mesh position={[x, 6.61, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.22, 0.16, 19.5]} />
            <PartMaterial color="#77828d" state={state} metalness={0.65} roughness={0.28} />
          </mesh>
          {COLUMN_Z_POSITIONS.map((z) => (
            <group key={z}>
              <mesh position={[x, 2.9, z]} castShadow receiveShadow>
                <boxGeometry args={[0.52, 5.8, 0.52]} />
                <PartMaterial color="#3b4652" state={state} />
              </mesh>
              <mesh position={[x, 0.12, z]} receiveShadow>
                <boxGeometry args={[0.9, 0.24, 0.9]} />
                <PartMaterial color="#586471" state={state} roughness={0.48} />
              </mesh>
              <mesh
                position={[x, 5.35, z]}
                rotation={[0, 0, x < 0 ? -0.72 : 0.72]}
                castShadow
              >
                <boxGeometry args={[0.22, 2.1, 0.22]} />
                <PartMaterial color="#53606d" state={state} />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}
