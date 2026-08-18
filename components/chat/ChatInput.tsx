"use client";

import { ArrowUp } from "lucide-react";
import { useState, type FormEvent, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  disabled: boolean;
  onSend: (message: string) => void;
}

export function ChatInput({ disabled, onSend }: ChatInputProps) {
  const [input, setInput] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();

    if (!message || disabled) {
      return;
    }

    setInput("");
    onSend(message);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <form
      onSubmit={submit}
      className="border-t border-white/[0.08] bg-[#0a1017] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3"
    >
      <div className="flex items-end gap-2 border border-white/[0.1] bg-[#070b10] p-2 focus-within:border-sky-400/40 focus-within:ring-1 focus-within:ring-sky-400/15">
        <Textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Preguntá sobre el puente grúa..."
          aria-label="Consulta para Nexo Industrial AI"
          maxLength={2000}
          rows={1}
          className="max-h-32 min-h-9 flex-1 resize-none rounded-none border-0 bg-transparent px-2 py-2 text-sm leading-5 text-slate-200 shadow-none placeholder:text-slate-600 focus-visible:ring-0"
        />
        <Button
          type="submit"
          size="icon"
          disabled={disabled || !input.trim()}
          aria-label="Enviar consulta"
          className="size-9 shrink-0 rounded-sm bg-sky-400 text-slate-950 hover:bg-sky-300"
        >
          <ArrowUp size={16} aria-hidden="true" />
        </Button>
      </div>
      <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-700">
        Enter para enviar · Shift + Enter para nueva línea
      </p>
    </form>
  );
}
