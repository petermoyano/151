import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

export function CraneBridge({ state }: { state: InteractionState }) {
  return (
    <group>
      {[-0.72, 0.72].map((z) => (
        <mesh key={z} position={[0, 7.35, z]} castShadow receiveShadow>
          <boxGeometry args={[13.35, 0.82, 0.5]} />
          <PartMaterial color="#c98a22" state={state} metalness={0.36} roughness={0.36} />
        </mesh>
      ))}
      {[-6.42, 6.42].map((x) => (
        <group key={x}>
          <mesh position={[x, 6.98, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.68, 0.48, 2.15]} />
            <PartMaterial color="#27323d" state={state} />
          </mesh>
          {[-0.72, 0.72].map((z) => (
            <mesh
              key={z}
              position={[x, 6.72, z]}
              rotation={[0, 0, Math.PI / 2]}
              castShadow
            >
              <cylinderGeometry args={[0.24, 0.24, 0.28, 20]} />
              <PartMaterial color="#111820" state={state} metalness={0.72} roughness={0.3} />
            </mesh>
          ))}
        </group>
      ))}
      <mesh position={[0, 7.35, 0]} castShadow>
        <boxGeometry args={[12.6, 0.18, 1.15]} />
        <PartMaterial color="#81591d" state={state} roughness={0.46} />
      </mesh>
    </group>
  );
}
