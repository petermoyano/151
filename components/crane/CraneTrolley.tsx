import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

interface CraneTrolleyMotorProps {
  side: "a" | "b";
  state: InteractionState;
}

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
      {Array.from({ length: 8 }, (_, index) => (
        <mesh
          key={index}
          position={[-0.98 + index * 0.28, 7.95, 1.04]}
          rotation={[0, 0, 0.5]}
          castShadow
        >
          <boxGeometry args={[0.22, 0.17, 0.035]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#e2a72b" : "#171c22"}
            metalness={0.18}
            roughness={0.48}
          />
        </mesh>
      ))}
    </group>
  );
}

export function CraneTrolleyWheels({
  state,
}: {
  state: InteractionState;
}) {
  return (
    <group position={[0.4, 0, 0]}>
      {[-0.83, 0.83].flatMap((x) =>
        [-0.72, 0.72].map((z) => (
          <mesh
            key={`${x}-${z}`}
            position={[x, 7.68, z]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.2, 0.2, 0.18, 18]} />
            <PartMaterial
              color="#151c24"
              state={state}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        )),
      )}
    </group>
  );
}

export function CraneTrolleyMotor({
  side,
  state,
}: CraneTrolleyMotorProps) {
  const direction = side === "a" ? -1 : 1;

  return (
    <group position={[0.4, 0, 0]}>
      <mesh
        position={[direction * 0.82, 8.48, 0.2]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <cylinderGeometry args={[0.23, 0.23, 0.5, 20]} />
        <PartMaterial
          color="#263746"
          state={state}
          metalness={0.58}
          roughness={0.32}
        />
      </mesh>
      <mesh position={[direction * 0.52, 8.43, 0.2]} castShadow>
        <boxGeometry args={[0.4, 0.52, 0.62]} />
        <PartMaterial color="#3f4f5d" state={state} roughness={0.4} />
      </mesh>
      <mesh
        position={[direction * 1.1, 8.48, 0.2]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <cylinderGeometry args={[0.13, 0.13, 0.1, 18]} />
        <PartMaterial
          color="#151d26"
          state={state}
          metalness={0.72}
          roughness={0.28}
        />
      </mesh>
    </group>
  );
}
