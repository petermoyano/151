import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

const RAIL_X_POSITIONS = [-6.5, 6.5] as const;
const RAIL_END_POSITIONS = [-13.72, 13.72] as const;

export function CraneEndStops({ state }: { state: InteractionState }) {
  return (
    <group name="rail-end-stops">
      {RAIL_X_POSITIONS.flatMap((x) =>
        RAIL_END_POSITIONS.map((z) => {
          const inwardDirection = z < 0 ? 1 : -1;

          return (
            <group key={`${x}-${z}`}>
              <mesh position={[x, 6.9, z]} castShadow receiveShadow>
                <boxGeometry args={[0.64, 0.58, 0.46]} />
                <PartMaterial
                  color="#c58a1f"
                  state={state}
                  metalness={0.38}
                  roughness={0.42}
                />
              </mesh>
              <mesh
                position={[x, 6.9, z + inwardDirection * 0.38]}
                rotation={[Math.PI / 2, 0, 0]}
                castShadow
              >
                <cylinderGeometry args={[0.18, 0.18, 0.42, 18]} />
                <PartMaterial
                  color="#1a222b"
                  state={state}
                  metalness={0.45}
                  roughness={0.48}
                />
              </mesh>
            </group>
          );
        }),
      )}
    </group>
  );
}

export function CraneWarningBeacon() {
  return (
    <group position={[0.4, 8.84, -0.48]} name="trolley-warning-beacon">
      <mesh position={[0, -0.08, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.18, 0.12, 18]} />
        <meshStandardMaterial
          color="#17202a"
          metalness={0.52}
          roughness={0.36}
        />
      </mesh>
      <mesh position={[0, 0.08, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.14, 0.22, 18]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={1.6}
          roughness={0.22}
        />
      </mesh>
      <pointLight color="#f59e0b" intensity={0.38} distance={2.2} decay={2} />
    </group>
  );
}
