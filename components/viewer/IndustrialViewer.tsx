"use client";

import { Bot, Box, MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";
import { NexoIndustrialChat } from "@/components/chat/NexoIndustrialChat";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { OverheadCrane } from "@/components/crane/OverheadCrane";
import { ComponentInfoPanel } from "@/components/viewer/ComponentInfoPanel";
import { ViewerScene } from "@/components/viewer/ViewerScene";
import { ViewerToolbar } from "@/components/viewer/ViewerToolbar";
import { craneComponents } from "@/data/crane-components";
import type { CraneComponentId } from "@/types/industrial";

export function IndustrialViewer() {
  const [hoveredId, setHoveredId] = useState<CraneComponentId | null>(null);
  const [selectedId, setSelectedId] = useState<CraneComponentId | null>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [showLabels, setShowLabels] = useState(false);
  const [resetRequest, setResetRequest] = useState(0);
  const [fitRequest, setFitRequest] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatComponentId, setChatComponentId] =
    useState<CraneComponentId | null>(null);

  useEffect(() => {
    document.body.style.cursor = hoveredId ? "pointer" : "";
    return () => {
      document.body.style.cursor = "";
    };
  }, [hoveredId]);

  const handleSelect = (id: CraneComponentId) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  const clearSelection = () => {
    setHoveredId(null);
    setSelectedId(null);
  };

  const hoveredComponent = hoveredId ? craneComponents[hoveredId] : null;
  const selectedComponent = selectedId ? craneComponents[selectedId] : null;
  const chatComponent = chatComponentId
    ? craneComponents[chatComponentId]
    : null;

  return (
    <main className="flex h-[100svh] min-h-[520px] flex-col overflow-hidden bg-[#070a0f] text-slate-100">
      <header className="relative z-30 flex h-16 shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#0a0f16] px-5 max-sm:h-14 max-sm:px-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid size-8 shrink-0 place-items-center border border-sky-400/30 bg-sky-400/[0.08] text-sky-300">
            <Box size={17} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-slate-100">
              Nexo Industrial <span className="text-sky-400">3D</span>
            </p>
            <p className="mt-0.5 truncate font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600 max-sm:hidden">
              Visor de activos industriales
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 max-sm:static max-sm:translate-x-0">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600 max-md:hidden">
            Activo
          </span>
          <span className="whitespace-nowrap text-xs font-medium text-slate-300">
            Puente grúa 01
          </span>
          <span className="border border-white/10 px-1.5 py-0.5 font-mono text-[8px] text-slate-600 max-md:hidden">
            FORVIS · CRN-01
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setChatComponentId(null);
                  setChatOpen(true);
                }}
                aria-label="Abrir Nexo Industrial AI"
                className="h-8 rounded-sm border-sky-400/20 bg-sky-400/[0.04] px-2.5 font-mono text-[9px] uppercase tracking-[0.1em] text-sky-300 hover:border-sky-400/35 hover:bg-sky-400/[0.08] hover:text-sky-200"
              >
                <Bot size={14} aria-hidden="true" />
                <span className="max-lg:hidden">Nexo Industrial AI</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Abrir Nexo Industrial AI</TooltipContent>
          </Tooltip>
          <div
            className="flex items-center gap-2.5 max-md:hidden"
            aria-label="Estado de la vista en vivo"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-40 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Vista 3D en vivo
            </span>
          </div>
        </div>
      </header>

      <section
        className="relative min-h-0 flex-1"
        aria-label="Espacio de trabajo del visor de la grúa"
      >
        <ViewerScene
          showGrid={showGrid}
          resetRequest={resetRequest}
          fitRequest={fitRequest}
          onClearSelection={clearSelection}
        >
          <OverheadCrane
            hoveredId={hoveredId}
            selectedId={selectedId}
            showLabels={showLabels}
            onHover={setHoveredId}
            onSelect={handleSelect}
          />
        </ViewerScene>

        <ViewerToolbar
          showGrid={showGrid}
          showLabels={showLabels}
          onResetCamera={() => setResetRequest((request) => request + 1)}
          onFitToView={() => setFitRequest((request) => request + 1)}
          onToggleGrid={() => setShowGrid((visible) => !visible)}
          onToggleLabels={() => setShowLabels((visible) => !visible)}
        />

        {selectedComponent ? (
          <ComponentInfoPanel
            component={selectedComponent}
            onClose={() => setSelectedId(null)}
            onAskAI={() => {
              setChatComponentId(selectedComponent.id);
              setChatOpen(true);
            }}
          />
        ) : null}

        {hoveredComponent && !selectedComponent ? (
          <div className="pointer-events-none absolute left-1/2 top-5 z-10 -translate-x-1/2 border border-white/10 bg-[#101720]/90 px-3 py-2 shadow-xl backdrop-blur-sm">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-sky-300">
              {hoveredComponent.name}
            </p>
          </div>
        ) : null}

        <div className="pointer-events-none absolute bottom-4 left-4 z-10 flex items-center gap-3 text-slate-500 max-sm:bottom-3 max-sm:left-3">
          <div className="grid size-8 place-items-center border border-white/10 bg-[#101720]/75">
            <MousePointer2 size={14} aria-hidden="true" />
          </div>
          <div className="font-mono text-[8px] uppercase leading-4 tracking-[0.13em]">
            <p>Arrastrar para orbitar · Rueda para acercar</p>
            <p className="text-slate-600">
              Clic derecho para desplazar · Seleccionar componente
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700 max-md:hidden">
          Unidades · metros
        </div>
      </section>
      <NexoIndustrialChat
        open={chatOpen}
        onOpenChange={setChatOpen}
        componentContext={chatComponent}
      />
    </main>
  );
}
