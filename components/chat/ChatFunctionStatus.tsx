"use client";

import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import type { ChatStatus } from "ai";

interface ChatFunctionStatusProps {
  status: ChatStatus;
  visible: boolean;
}

function AnimatedEllipsis() {
  return (
    <span className="ml-0.5 inline-flex w-3 justify-between" aria-hidden="true">
      <span className="animate-pulse [animation-delay:0ms]">.</span>
      <span className="animate-pulse [animation-delay:180ms]">.</span>
      <span className="animate-pulse [animation-delay:360ms]">.</span>
    </span>
  );
}

export function ChatFunctionStatus({
  status,
  visible,
}: ChatFunctionStatusProps) {
  if (!visible) {
    return null;
  }

  const isQuerying = status === "submitted";
  const hasFailed = status === "error";

  return (
    <section
      className="shrink-0 border-b border-white/[0.07] bg-black/10 px-4 py-2.5"
      aria-label="Estado de la consulta de datos"
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700">
        Estado de función
      </p>
      <div className="mt-1.5 flex min-h-5 items-center justify-between gap-3">
        <div
          className={
            hasFailed
              ? "flex items-center gap-2 text-red-300"
              : isQuerying
                ? "flex items-center gap-2 text-sky-300"
                : "flex items-center gap-2 text-emerald-300"
          }
        >
          {hasFailed ? (
            <CircleAlert size={13} aria-hidden="true" />
          ) : isQuerying ? (
            <LoaderCircle
              size={13}
              className="animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
          ) : (
            <CircleCheck size={13} aria-hidden="true" />
          )}
          <span className="text-[11px]">
            {hasFailed ? (
              "Consulta de datos interrumpida"
            ) : isQuerying ? (
              <>
                Consultando datos operativos
                <AnimatedEllipsis />
              </>
            ) : (
              "Consulta de datos completada"
            )}
          </span>
        </div>
        {status === "streaming" ? (
          <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-600">
            <span className="size-1.5 animate-pulse rounded-full bg-sky-400 motion-reduce:animate-none" />
            Generando análisis
          </span>
        ) : null}
      </div>
    </section>
  );
}
