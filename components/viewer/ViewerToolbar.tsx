import {
  Focus,
  Grid3X3,
  RotateCcw,
  Tags,
  type LucideIcon,
} from "lucide-react";

interface ViewerToolbarProps {
  showGrid: boolean;
  showLabels: boolean;
  onResetCamera: () => void;
  onFitToView: () => void;
  onToggleGrid: () => void;
  onToggleLabels: () => void;
}

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick: () => void;
}

function ToolButton({
  label,
  icon: Icon,
  active = false,
  onClick,
}: ToolButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={label.startsWith("Toggle") ? active : undefined}
      title={label}
      className={`grid size-10 place-items-center border text-slate-300 transition-colors hover:bg-white/[0.07] hover:text-white ${
        active
          ? "border-sky-400/40 bg-sky-400/10 text-sky-300"
          : "border-white/10 bg-[#111820]/92"
      }`}
    >
      <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
    </button>
  );
}

export function ViewerToolbar({
  showGrid,
  showLabels,
  onResetCamera,
  onFitToView,
  onToggleGrid,
  onToggleLabels,
}: ViewerToolbarProps) {
  return (
    <div
      className="absolute left-4 top-4 z-20 flex overflow-hidden rounded-sm border border-white/5 shadow-2xl max-sm:left-3 max-sm:top-3"
      role="toolbar"
      aria-label="3D viewer tools"
    >
      <ToolButton label="Reset camera" icon={RotateCcw} onClick={onResetCamera} />
      <ToolButton label="Fit crane to view" icon={Focus} onClick={onFitToView} />
      <ToolButton
        label="Toggle floor grid"
        icon={Grid3X3}
        active={showGrid}
        onClick={onToggleGrid}
      />
      <ToolButton
        label="Toggle component labels"
        icon={Tags}
        active={showLabels}
        onClick={onToggleLabels}
      />
    </div>
  );
}
