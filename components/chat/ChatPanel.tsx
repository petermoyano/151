"use client";

import { ArrowLeft, Bot, X } from "lucide-react";
import type { ChatStatus, UIMessage } from "ai";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessages } from "@/components/chat/ChatMessages";

interface ChatPanelProps {
  messages: UIMessage[];
  status: ChatStatus;
  componentName: string | null;
  hasError: boolean;
  onSend: (message: string) => void;
  onRetry: () => void;
}

export function ChatPanel({
  messages,
  status,
  componentName,
  hasError,
  onSend,
  onRetry,
}: ChatPanelProps) {
  const busy = status === "submitted" || status === "streaming";

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#0a1017]">
      <SheetHeader className="relative shrink-0 border-b border-white/[0.08] bg-[#0c121a] px-4 py-3.5 pr-14">
        <div className="flex items-center gap-3">
          <SheetClose asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Volver al visor 3D"
              className="size-8 shrink-0 rounded-sm text-slate-400 hover:bg-white/5 hover:text-white sm:hidden"
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </Button>
          </SheetClose>
          <div className="grid size-8 shrink-0 place-items-center border border-sky-400/25 bg-sky-400/[0.07] text-sky-300 max-sm:hidden">
            <Bot size={16} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <SheetTitle className="text-sm font-semibold text-slate-100">
              PlantScope AI
            </SheetTitle>
            <SheetDescription className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
              Asistente del Puente Grúa 01
            </SheetDescription>
          </div>
        </div>
        <SheetClose asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Cerrar PlantScope AI"
            className="absolute right-3 top-3.5 size-8 rounded-sm text-slate-500 hover:bg-white/5 hover:text-white max-sm:hidden"
          >
            <X size={15} aria-hidden="true" />
          </Button>
        </SheetClose>
        {componentName ? (
          <Badge
            variant="outline"
            className="mt-3 w-fit rounded-sm border-sky-400/20 bg-sky-400/[0.06] px-2 py-1 font-mono text-[8px] font-normal uppercase tracking-[0.12em] text-sky-300"
          >
            Consultando sobre · {componentName}
          </Badge>
        ) : null}
      </SheetHeader>

      <ChatMessages
        messages={messages}
        status={status}
        componentName={componentName}
        hasError={hasError}
        onSend={onSend}
        onRetry={onRetry}
      />
      <ChatInput disabled={busy} onSend={onSend} />
    </div>
  );
}
