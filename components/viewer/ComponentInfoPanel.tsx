import { Box, CircleDot, Layers3, X } from "lucide-react";
import type { IndustrialComponentMetadata } from "@/types/industrial";

interface ComponentInfoPanelProps {
  component: IndustrialComponentMetadata;
  onClose: () => void;
}

export function ComponentInfoPanel({
  component,
  onClose,
}: ComponentInfoPanelProps) {
  return (
    <aside
      className="absolute right-4 top-4 z-20 w-[min(330px,calc(100%-2rem))] overflow-hidden rounded-sm border border-white/10 bg-[#0d131b]/95 text-slate-200 shadow-2xl shadow-black/35 backdrop-blur-sm max-sm:bottom-3 max-sm:left-3 max-sm:right-3 max-sm:top-auto max-sm:w-auto"
      aria-label={`${component.name} information`}
      aria-live="polite"
    >
      <div className="h-px bg-sky-400/70" />
      <div className="p-5 max-sm:p-4">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="mb-2 font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-sky-400">
              Selected component
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50">
              {component.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-8 shrink-0 place-items-center border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            aria-label="Deselect component"
            title="Deselect component"
          >
            <X size={15} aria-hidden="true" />
          </button>
        </div>

        <dl className="mt-5 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <Layers3 size={13} aria-hidden="true" />
              Category
            </dt>
            <dd className="text-right text-xs font-medium text-slate-300">
              {component.category}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <CircleDot size={13} aria-hidden="true" />
              Status
            </dt>
            <dd className="flex items-center gap-2 text-xs font-medium text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              {component.status}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <Box size={13} aria-hidden="true" />
              Asset ID
            </dt>
            <dd className="font-mono text-[10px] tracking-[0.08em] text-slate-400">
              {component.assetCode}
            </dd>
          </div>
        </dl>

        <div className="mt-5">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            Description
          </p>
          <p className="text-sm leading-6 text-slate-400">
            {component.description}
          </p>
        </div>
      </div>
      <div className="border-t border-white/[0.07] bg-black/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.13em] text-slate-600 max-sm:hidden">
        Click empty space to clear selection
      </div>
    </aside>
  );
}
