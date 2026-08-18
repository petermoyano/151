import { CraneBridge } from "@/components/crane/CraneBridge";
import { CraneCable } from "@/components/crane/CraneCable";
import { CraneHoist } from "@/components/crane/CraneHoist";
import { CraneHook } from "@/components/crane/CraneHook";
import { SelectableCranePart } from "@/components/crane/CranePart";
import { CraneRails } from "@/components/crane/CraneRails";
import {
  CraneTrolley,
  CraneTrolleyMotor,
  CraneTrolleyWheels,
} from "@/components/crane/CraneTrolley";
import { craneComponents } from "@/data/crane-components";
import type { CraneComponentId, InteractionState } from "@/types/industrial";

interface OverheadCraneProps {
  hoveredId: CraneComponentId | null;
  selectedId: CraneComponentId | null;
  showLabels: boolean;
  onHover: (id: CraneComponentId | null) => void;
  onSelect: (id: CraneComponentId) => void;
}

const labelPositions: Record<CraneComponentId, [number, number, number]> = {
  rails: [-6.5, 7.3, -5.5],
  bridge: [-3.8, 8.25, 0.72],
  trolley: [0.4, 9.25, 0],
  "trolley-motor-a": [-0.75, 8.95, 0.3],
  "trolley-motor-b": [1.55, 8.95, 0.3],
  "trolley-wheels": [0.4, 7.35, 1.1],
  hoist: [0.4, 6.85, 0],
  cable: [0.8, 4.8, 0],
  hook: [1.4, 1.7, 0],
};

export function OverheadCrane({
  hoveredId,
  selectedId,
  showLabels,
  onHover,
  onSelect,
}: OverheadCraneProps) {
  const stateFor = (id: CraneComponentId): InteractionState => {
    if (selectedId === id) return "selected";
    if (hoveredId === id) return "hovered";
    return "idle";
  };

  const partProps = (id: CraneComponentId) => ({
    id,
    label: craneComponents[id].name,
    labelPosition: labelPositions[id],
    state: stateFor(id),
    showLabel: showLabels,
    onHover,
    onSelect,
  });

  return (
    <group name="overhead-crane-01">
      <SelectableCranePart {...partProps("rails")}>
        <CraneRails state={stateFor("rails")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("bridge")}>
        <CraneBridge state={stateFor("bridge")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("trolley")}>
        <CraneTrolley state={stateFor("trolley")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("trolley-motor-a")}>
        <CraneTrolleyMotor side="a" state={stateFor("trolley-motor-a")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("trolley-motor-b")}>
        <CraneTrolleyMotor side="b" state={stateFor("trolley-motor-b")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("trolley-wheels")}>
        <CraneTrolleyWheels state={stateFor("trolley-wheels")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("hoist")}>
        <CraneHoist state={stateFor("hoist")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("cable")}>
        <CraneCable state={stateFor("cable")} />
      </SelectableCranePart>
      <SelectableCranePart {...partProps("hook")}>
        <CraneHook state={stateFor("hook")} />
      </SelectableCranePart>
    </group>
  );
}
