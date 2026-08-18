import { Html } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { ReactNode } from "react";
import type { CraneComponentId, InteractionState } from "@/types/industrial";

interface SelectableCranePartProps {
  id: CraneComponentId;
  label: string;
  labelPosition: [number, number, number];
  state: InteractionState;
  showLabel: boolean;
  onHover: (id: CraneComponentId | null) => void;
  onSelect: (id: CraneComponentId) => void;
  children: ReactNode;
}

export function SelectableCranePart({
  id,
  label,
  labelPosition,
  state,
  showLabel,
  onHover,
  onSelect,
  children,
}: SelectableCranePartProps) {
  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(id);
  };

  return (
    <group
      name={id}
      onClick={handleClick}
      onPointerOver={(event) => {
        event.stopPropagation();
        onHover(id);
      }}
      onPointerOut={() => onHover(null)}
    >
      {children}
      {showLabel ? (
        <Html
          position={labelPosition}
          center
          zIndexRange={[20, 0]}
          distanceFactor={16}
          style={{ pointerEvents: "none" }}
        >
          <span
            className={`whitespace-nowrap rounded-sm border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] shadow-lg ${
              state === "selected"
                ? "border-sky-400/60 bg-sky-950/90 text-sky-100"
                : "border-white/15 bg-[#101720]/90 text-slate-300"
            }`}
          >
            {label}
          </span>
        </Html>
      ) : null}
    </group>
  );
}

interface PartMaterialProps {
  color: string;
  state: InteractionState;
  metalness?: number;
  roughness?: number;
}

export function PartMaterial({
  color,
  state,
  metalness = 0.42,
  roughness = 0.38,
}: PartMaterialProps) {
  return (
    <meshStandardMaterial
      color={color}
      metalness={metalness}
      roughness={roughness}
      emissive={state === "idle" ? "#000000" : "#38bdf8"}
      emissiveIntensity={
        state === "selected" ? 0.32 : state === "hovered" ? 0.16 : 0
      }
    />
  );
}
