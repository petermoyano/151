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

const WALKWAY_DASH_POSITIONS = [
  -12,
  -10,
  -8,
  -6,
  -4,
  -2,
  0,
  2,
  8,
  10,
  12,
] as const;
const CROSSWALK_Z_POSITIONS = [4.35, 4.8, 5.25, 5.7, 6.15, 6.6] as const;

export function PlantSafetyMarkings() {
  return (
    <group name="plant-floor-safety-markings">
      <mesh position={[9, 0.016, 0]}>
        <boxGeometry args={[2.4, 0.018, 27.2]} />
        <meshStandardMaterial
          color="#102522"
          roughness={0.94}
          metalness={0.02}
        />
      </mesh>

      {[7.8, 10.2].map((x) => (
        <mesh key={x} position={[x, 0.03, 0]}>
          <boxGeometry args={[0.1, 0.025, 27.4]} />
          <meshStandardMaterial
            color="#d7a426"
            emissive="#6f4c0c"
            emissiveIntensity={0.18}
            roughness={0.58}
          />
        </mesh>
      ))}

      {WALKWAY_DASH_POSITIONS.map((z) => (
        <mesh key={z} position={[9, 0.032, z]}>
          <boxGeometry args={[0.14, 0.027, 0.95]} />
          <meshStandardMaterial color="#d8e0df" roughness={0.62} />
        </mesh>
      ))}

      {CROSSWALK_Z_POSITIONS.map((z) => (
        <mesh key={z} position={[9, 0.036, z]}>
          <boxGeometry args={[2.12, 0.03, 0.28]} />
          <meshStandardMaterial
            color="#e4e9e6"
            emissive="#4d5552"
            emissiveIntensity={0.1}
            roughness={0.56}
          />
        </mesh>
      ))}

      {[-2.75, 2.75].map((x) => (
        <mesh key={`load-x-${x}`} position={[0.4 + x, 0.034, 0]}>
          <boxGeometry args={[0.1, 0.03, 5.6]} />
          <meshStandardMaterial color="#d39a22" roughness={0.58} />
        </mesh>
      ))}
      {[-2.75, 2.75].map((z) => (
        <mesh key={`load-z-${z}`} position={[0.4, 0.034, z]}>
          <boxGeometry args={[5.6, 0.03, 0.1]} />
          <meshStandardMaterial color="#d39a22" roughness={0.58} />
        </mesh>
      ))}

      {[
        [-2.35, -2.35, 0.65],
        [2.35, -2.35, -0.65],
        [-2.35, 2.35, -0.65],
        [2.35, 2.35, 0.65],
      ].map(([x, z, rotation]) => (
        <mesh
          key={`${x}-${z}`}
          position={[0.4 + x, 0.038, z]}
          rotation={[0, rotation, 0]}
        >
          <boxGeometry args={[1.05, 0.032, 0.12]} />
          <meshStandardMaterial
            color="#d8613f"
            emissive="#672315"
            emissiveIntensity={0.12}
            roughness={0.58}
          />
        </mesh>
      ))}
    </group>
  );
}
