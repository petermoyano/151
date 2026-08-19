import {
  Activity,
  BookOpen,
  ExternalLink,
  Factory,
  FileText,
  Box,
  ChevronDown,
  CircleDot,
  Layers3,
  MessageSquareText,
  Sparkles,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IndustrialComponentMetadata } from "@/types/industrial";

interface ComponentInfoPanelProps {
  component: IndustrialComponentMetadata;
  onClose: () => void;
  onAskAI: () => void;
}

interface PlaceholderRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

function PlaceholderRow({
  icon: Icon,
  label,
  value,
}: PlaceholderRowProps) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <Icon
        size={13}
        className="shrink-0 text-slate-600"
        aria-hidden="true"
      />
      <div className="min-w-0">
        <p className="text-[11px] font-medium text-slate-400">{label}</p>
        <p className="mt-0.5 text-[10px] text-slate-600">{value}</p>
      </div>
    </div>
  );
}

export function ComponentInfoPanel({
  component,
  onClose,
  onAskAI,
}: ComponentInfoPanelProps) {
  return (
    <aside
      className="absolute right-4 top-4 z-20 max-h-[calc(100%-2rem)] w-[min(330px,calc(100%-2rem))] overflow-y-auto rounded-sm border border-white/10 bg-[#0d131b]/95 text-slate-200 shadow-2xl shadow-black/35 backdrop-blur-sm max-sm:bottom-3 max-sm:left-3 max-sm:right-3 max-sm:top-auto max-sm:w-auto"
      aria-label={`Información de ${component.name}`}
      aria-live="polite"
    >
      <div className="h-px bg-sky-400/70" />
      <div className="p-5 max-sm:p-4">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="mb-2 font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-sky-400">
              Componente seleccionado
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50">
              {component.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-8 shrink-0 place-items-center border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            aria-label="Deseleccionar componente"
            title="Deseleccionar componente"
          >
            <X size={15} aria-hidden="true" />
          </button>
        </div>

        <dl className="mt-5 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <Layers3 size={13} aria-hidden="true" />
              Categoría
            </dt>
            <dd className="text-right text-xs font-medium text-slate-300">
              {component.category}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <CircleDot size={13} aria-hidden="true" />
              Estado
            </dt>
            <dd
              className={
                component.status === "Operativo"
                  ? "flex items-center gap-2 text-xs font-medium text-emerald-300"
                  : component.status === "Requiere atención"
                    ? "flex items-center gap-2 text-xs font-medium text-amber-300"
                    : "flex items-center gap-2 text-xs font-medium text-rose-300"
              }
            >
              <span
                className={
                  component.status === "Operativo"
                    ? "size-1.5 rounded-full bg-emerald-400"
                    : component.status === "Requiere atención"
                      ? "size-1.5 rounded-full bg-amber-400"
                      : "size-1.5 rounded-full bg-rose-400"
                }
              />
              {component.status}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <Factory size={13} aria-hidden="true" />
              Fabricante
            </dt>
            <dd className="max-w-[58%] text-right text-xs font-medium text-slate-300">
              {component.manufacturer}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <Box size={13} aria-hidden="true" />
              Modelo
            </dt>
            <dd className="max-w-[58%] text-right text-xs font-medium text-slate-300">
              {component.model}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="flex items-center gap-2 text-xs text-slate-500">
              <Box size={13} aria-hidden="true" />
              ID del activo
            </dt>
            <dd className="font-mono text-[10px] tracking-[0.08em] text-slate-400">
              {component.assetCode}
            </dd>
          </div>
        </dl>

        <div className="mt-5">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            Descripción
          </p>
          <p className="text-sm leading-6 text-slate-400">
            {component.description}
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onAskAI}
          className="mt-5 h-9 w-full justify-start rounded-sm border-sky-400/20 bg-sky-400/[0.04] px-3 font-mono text-[9px] uppercase tracking-[0.11em] text-sky-300 hover:border-sky-400/35 hover:bg-sky-400/[0.08] hover:text-sky-200"
        >
          <Sparkles size={13} aria-hidden="true" />
          Consultar con Nexo Industrial AI
        </Button>

        <details className="group mt-4 border border-white/[0.08] bg-black/10">
          <summary className="flex cursor-pointer list-none items-center gap-3 px-3.5 py-3 [&::-webkit-details-marker]:hidden">
            <BookOpen
              size={14}
              className="shrink-0 text-sky-400"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-300">
                Ficha técnica y documentación
              </p>
              <p className="mt-0.5 truncate text-[9px] text-slate-600">
                {component.specifications.length} especificaciones ·{" "}
                {component.documentation.length} documentos
              </p>
            </div>
            <ChevronDown
              size={13}
              className="shrink-0 text-slate-600 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="border-t border-white/[0.07]">
            <div className="divide-y divide-white/[0.06] px-3.5 py-1">
              {component.specifications.map((specification) => (
                <div
                  key={specification.label}
                  className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-3 py-2.5"
                >
                  <p className="text-[10px] text-slate-500">
                    {specification.label}
                  </p>
                  <div className="text-right">
                    <p className="text-[10px] leading-4 text-slate-300">
                      {specification.value}
                    </p>
                    <span
                      className={
                        specification.basis === "FORVIS"
                          ? "mt-1 inline-block border border-sky-400/15 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-sky-400/70"
                          : "mt-1 inline-block border border-amber-400/15 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-amber-300/70"
                      }
                    >
                      {specification.basis}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.07] px-3.5 py-3">
              <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
                Documentación vinculada
              </p>
              <div className="space-y-1.5">
                {component.documentation.map((document) => (
                  <a
                    key={document.url}
                    href={document.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/document flex items-start gap-2.5 border border-white/[0.07] px-2.5 py-2.5 transition-colors hover:border-sky-400/25 hover:bg-sky-400/[0.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  >
                    <FileText
                      size={13}
                      className="mt-0.5 shrink-0 text-sky-400/70"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] leading-4 text-slate-300 group-hover/document:text-sky-200">
                        {document.title}
                      </span>
                      <span className="mt-0.5 block font-mono text-[7px] uppercase tracking-[0.1em] text-slate-600">
                        {document.publisher} · {document.type}
                      </span>
                    </span>
                    <ExternalLink
                      size={11}
                      className="mt-0.5 shrink-0 text-slate-600 group-hover/document:text-sky-400"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
              <p className="mt-2.5 text-[9px] leading-4 text-slate-600">
                Los valores “Configuración demo” deben validarse contra la
                placa y la documentación del equipo instalado.
              </p>
            </div>
          </div>
        </details>

        <details className="group mt-4 border border-white/[0.08] bg-black/10">
          <summary className="flex cursor-pointer list-none items-center gap-3 px-3.5 py-3 [&::-webkit-details-marker]:hidden">
            <Activity
              size={14}
              className="shrink-0 text-sky-400"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-300">
                Datos complementarios
              </p>
              <p className="mt-0.5 truncate text-[9px] text-slate-600">
                Mantenimiento, salud y comentarios
              </p>
            </div>
            <span className="border border-white/[0.08] px-1.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-slate-600">
              Próximamente
            </span>
            <ChevronDown
              size={13}
              className="shrink-0 text-slate-600 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="divide-y divide-white/[0.06] border-t border-white/[0.07] px-3.5">
            <PlaceholderRow
              icon={Wrench}
              label="Mantenimiento"
              value="Sin registros vinculados"
            />
            <PlaceholderRow
              icon={Activity}
              label="Salud del activo"
              value="Sin telemetría disponible"
            />
            <PlaceholderRow
              icon={MessageSquareText}
              label="Comentarios"
              value="Sin comentarios cargados"
            />
          </div>
        </details>
      </div>
      <div className="border-t border-white/[0.07] bg-black/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.13em] text-slate-600 max-sm:hidden">
        Hacé clic en el espacio vacío para limpiar la selección
      </div>
    </aside>
  );
}
