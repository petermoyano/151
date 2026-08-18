"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useCallback, useMemo } from "react";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import type {
  CraneComponentId,
  IndustrialComponentMetadata,
} from "@/types/industrial";

interface PlantScopeChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  componentContext: IndustrialComponentMetadata<CraneComponentId> | null;
}

export function PlantScopeChat({
  open,
  onOpenChange,
  componentContext,
}: PlantScopeChatProps) {
  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    [],
  );
  const {
    messages,
    sendMessage,
    regenerate,
    status,
    error,
    clearError,
  } = useChat({ transport });

  const componentId = componentContext?.id ?? null;

  const handleSend = useCallback(
    (text: string) => {
      clearError();
      void sendMessage(
        { text },
        {
          body: { componentId },
        },
      );
    },
    [clearError, componentId, sendMessage],
  );

  const handleRetry = useCallback(() => {
    clearError();
    void regenerate({
      body: { componentId },
    });
  }, [clearError, componentId, regenerate]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="gap-0 border-l border-white/[0.1] bg-[#0a1017] p-0 shadow-2xl shadow-black/60 data-[side=right]:h-dvh data-[side=right]:w-screen data-[side=right]:max-w-none data-[side=right]:sm:w-[420px] data-[side=right]:sm:max-w-[420px]"
      >
        <ChatPanel
          messages={messages}
          status={status}
          componentName={componentContext?.name ?? null}
          hasError={Boolean(error)}
          onSend={handleSend}
          onRetry={handleRetry}
        />
      </SheetContent>
    </Sheet>
  );
}
