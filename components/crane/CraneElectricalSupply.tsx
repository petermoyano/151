import { useMemo } from "react";
import { CatmullRomCurve3, Vector3 } from "three";
import { PartMaterial } from "@/components/crane/CranePart";
import type { InteractionState } from "@/types/industrial";

const FESTOON_ANCHORS = [-5.4, -4, -2.6, -1.2, 0.4] as const;

export function CraneElectricalSupply({
  state,
}: {
  state: InteractionState;
}) {
  const cableLoops = useMemo(
    () =>
      FESTOON_ANCHORS.slice(0, -1).map((startX, index) => {
        const endX = FESTOON_ANCHORS[index + 1];
        const centerX = (startX + endX) / 2;

        return new CatmullRomCurve3([
          new Vector3(startX, 6.94, -1.13),
          new Vector3(centerX, 6.1 - index * 0.04, -1.13),
          new Vector3(endX, 6.94, -1.13),
        ]);
      }),
    [],
  );

  const trolleyFeed = useMemo(
    () =>
      new CatmullRomCurve3([
        new Vector3(0.4, 6.94, -1.13),
        new Vector3(0.58, 7.45, -1.08),
        new Vector3(0.4, 8.08, -0.8),
      ]),
    [],
  );

  return (
    <group name="festoon-electrical-supply">
      <mesh position={[0, 7.14, -1.08]} castShadow>
        <boxGeometry args={[12.1, 0.12, 0.14]} />
        <PartMaterial
          color="#586571"
          state={state}
          metalness={0.66}
          roughness={0.3}
        />
      </mesh>

      {[-5.6, -2.8, 0, 2.8, 5.6].map((x) => (
        <mesh key={x} position={[x, 7.35, -0.91]} castShadow>
          <boxGeometry args={[0.12, 0.5, 0.1]} />
          <PartMaterial color="#46535f" state={state} roughness={0.4} />
        </mesh>
      ))}

      {FESTOON_ANCHORS.map((x) => (
        <group key={x}>
          <mesh position={[x, 7.03, -1.08]} castShadow>
            <boxGeometry args={[0.22, 0.18, 0.28]} />
            <PartMaterial color="#26323d" state={state} metalness={0.55} />
          </mesh>
          <mesh
            position={[x, 7.13, -1.08]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.07, 0.07, 0.2, 12]} />
            <PartMaterial
              color="#111820"
              state={state}
              metalness={0.72}
              roughness={0.25}
            />
          </mesh>
        </group>
      ))}

      {cableLoops.map((curve, index) => (
        <mesh key={index} castShadow>
          <tubeGeometry args={[curve, 20, 0.035, 8, false]} />
          <PartMaterial
            color="#111820"
            state={state}
            metalness={0.12}
            roughness={0.72}
          />
        </mesh>
      ))}

      <mesh castShadow>
        <tubeGeometry args={[trolleyFeed, 18, 0.035, 8, false]} />
        <PartMaterial
          color="#111820"
          state={state}
          metalness={0.12}
          roughness={0.72}
        />
      </mesh>
    </group>
  );
}
