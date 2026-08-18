import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

const INDICATOR_COLORS = ["#22c55e", "#f59e0b", "#38bdf8"] as const;

function PanelIndicators({ positionY }: { positionY: number }) {
  return (
    <group>
      {INDICATOR_COLORS.map((color, index) => (
        <mesh
          key={color}
          position={[-0.22 + index * 0.22, positionY, 0.245]}
        >
          <cylinderGeometry args={[0.045, 0.045, 0.025, 14]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1.15}
            roughness={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

export function CraneMainPowerPanel({
  state,
}: {
  state: InteractionState;
}) {
  return (
    <group position={[7.2, 0, 7.5]} name="main-power-panel">
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[1.1, 0.2, 0.72]} />
        <PartMaterial color="#4c5863" state={state} roughness={0.5} />
      </mesh>
      <mesh position={[0, 1.08, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.88, 1.78, 0.46]} />
        <PartMaterial
          color="#33414d"
          state={state}
          metalness={0.42}
          roughness={0.38}
        />
      </mesh>
      <mesh position={[0, 1.08, 0.24]} castShadow>
        <boxGeometry args={[0.78, 1.66, 0.035]} />
        <PartMaterial color="#46545f" state={state} roughness={0.4} />
      </mesh>
      <PanelIndicators positionY={1.66} />
      <mesh position={[0.29, 1.03, 0.275]} castShadow>
        <boxGeometry args={[0.055, 0.34, 0.055]} />
        <PartMaterial
          color="#161d24"
          state={state}
          metalness={0.68}
          roughness={0.28}
        />
      </mesh>
      <mesh position={[0, 4.15, -0.08]} castShadow>
        <cylinderGeometry args={[0.065, 0.065, 4.35, 14]} />
        <PartMaterial
          color="#56636d"
          state={state}
          metalness={0.62}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[-0.24, 2.04, 0]} castShadow>
        <cylinderGeometry args={[0.055, 0.055, 0.3, 14]} />
        <PartMaterial
          color="#202a33"
          state={state}
          metalness={0.58}
          roughness={0.32}
        />
      </mesh>
    </group>
  );
}

export function CraneBridgeControlPanel({
  state,
}: {
  state: InteractionState;
}) {
  return (
    <group position={[5.2, 7.18, -1.02]} name="bridge-control-panel">
      <mesh position={[0, 0.48, 0]} castShadow>
        <boxGeometry args={[0.86, 0.98, 0.38]} />
        <PartMaterial
          color="#2f3d49"
          state={state}
          metalness={0.44}
          roughness={0.36}
        />
      </mesh>
      <mesh position={[0, 0.48, 0.205]} castShadow>
        <boxGeometry args={[0.76, 0.88, 0.035]} />
        <PartMaterial color="#43515d" state={state} roughness={0.4} />
      </mesh>
      <PanelIndicators positionY={0.76} />
      <mesh position={[0.27, 0.42, 0.24]} castShadow>
        <boxGeometry args={[0.05, 0.24, 0.05]} />
        <PartMaterial
          color="#151c23"
          state={state}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>
      {[-0.31, 0.31].map((x) => (
        <mesh key={x} position={[x, -0.08, 0]} castShadow>
          <boxGeometry args={[0.12, 0.22, 0.34]} />
          <PartMaterial color="#56636e" state={state} roughness={0.42} />
        </mesh>
      ))}
      <mesh position={[-1.25, 0.92, 0]} castShadow>
        <boxGeometry args={[1.7, 0.09, 0.12]} />
        <PartMaterial
          color="#4d5b66"
          state={state}
          metalness={0.58}
          roughness={0.32}
        />
      </mesh>
    </group>
  );
}
