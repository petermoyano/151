"use client";

import { Bot, LoaderCircle, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatStatus, UIMessage } from "ai";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatQuickActions } from "@/components/chat/ChatQuickActions";
const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mb-2 mt-4 border-b border-white/[0.08] pb-1.5 text-sm font-semibold text-slate-100 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-1.5 mt-4 text-sm font-semibold text-slate-100 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-1.5 mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-300 first:mt-0">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-1 mt-3 text-xs font-semibold text-slate-200 first:mt-0">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-2 [overflow-wrap:anywhere] first:mt-0 last:mb-0">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-2 list-disc space-y-1 pl-5 marker:text-sky-500">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-2 list-decimal space-y-1 pl-5 marker:text-sky-400">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-0.5">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-100">{children}</strong>
  ),
  em: ({ children }) => <em className="text-slate-200">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-3 border-l-2 border-sky-400/40 bg-sky-400/[0.04] py-1 pl-3 text-slate-400">
      {children}
    </blockquote>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
    >
      {children}
    </a>
  ),
  code: ({ children, className }) => (
    <code
      className={
        className
          ? `${className} font-mono text-[0.85em] text-sky-200`
          : "bg-white/[0.06] px-1 py-0.5 font-mono text-[0.85em] text-sky-200"
      }
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-3 overflow-x-auto border border-white/[0.09] bg-black/25 p-3 font-mono text-xs leading-5 text-slate-300">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-4 border-white/[0.09]" />,
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto border border-white/[0.09]">
      <table className="w-full border-collapse text-left text-xs">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-white/[0.12] bg-white/[0.04] px-2 py-1.5 font-medium text-slate-200">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-white/[0.06] px-2 py-1.5 align-top text-slate-400">
      {children}
    </td>
  ),
  input: ({ checked, type }) => (
    <input
      type={type}
      checked={checked}
      disabled
      className="mr-1.5 size-3 accent-sky-400"
    />
  ),
  del: ({ children }) => (
    <del className="text-slate-500 decoration-slate-600">{children}</del>
  ),
};

interface ChatMessagesProps {
  messages: UIMessage[];
  status: ChatStatus;
  componentName: string | null;
  hasError: boolean;
  onSend: (message: string) => void;
  onRetry: () => void;
}

export function ChatMessages({
  messages,
  status,
  componentName,
  hasError,
  onSend,
  onRetry,
}: ChatMessagesProps) {
  const endRef = useRef<HTMLDivElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    endRef.current?.scrollIntoView({
      block: "end",
      behavior: status === "streaming" ? "auto" : "smooth",
    });
  }, [messages, status]);

  return (
    <ScrollArea className="min-h-0 flex-1">
      <div
        className="mx-auto flex min-h-full w-full max-w-[560px] flex-col px-4 py-5"
        aria-live="polite"
        aria-busy={busy}
      >
        {messages.length === 0 ? (
          <div className="my-auto py-6">
            <div className="mb-5 grid size-10 place-items-center border border-sky-400/25 bg-sky-400/[0.07] text-sky-300">
              <Sparkles size={18} aria-hidden="true" />
            </div>
            <h2 className="text-base font-semibold tracking-tight text-slate-100">
              Nexo Industrial AI
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Asistente operativo del Puente Grúa 01.
            </p>
            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-500">
              Consultá sobre estado, mantenimiento, alarmas y próximos controles.
            </p>
            {componentName ? (
              <p className="mt-3 border-l border-sky-400/40 pl-3 text-xs leading-5 text-slate-400">
                Las sugerencias se enfocan en{" "}
                <span className="text-sky-300">{componentName}</span>.
              </p>
            ) : null}
            <div className="mt-6">
              <ChatQuickActions
                componentName={componentName}
                disabled={busy}
                onSend={onSend}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((message) => {
              const textParts = message.parts.filter(
                (part) => part.type === "text",
              );
              const messageText = textParts
                .map((part) => part.text)
                .join("");

              if (!messageText) {
                return null;
              }

              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={isUser ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={
                      isUser
                        ? "max-w-[88%] border border-sky-400/20 bg-sky-400/[0.08] px-3.5 py-2.5 text-sm leading-6 text-slate-200"
                        : "max-w-full text-sm leading-6 text-slate-300"
                    }
                  >
                    {!isUser ? (
                      <div className="mb-2 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-sky-400">
                        <Bot size={12} aria-hidden="true" />
                        Nexo Industrial AI
                      </div>
                    ) : null}
                    {isUser ? (
                      <p
                        className="whitespace-pre-wrap [overflow-wrap:anywhere]"
                      >
                        {messageText}
                      </p>
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                      >
                        {messageText}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              );
            })}

            {status === "submitted" ? (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <LoaderCircle
                  size={14}
                  className="animate-spin motion-reduce:animate-none"
                  aria-hidden="true"
                />
                Analizando datos del activo...
              </div>
            ) : null}

            {hasError ? (
              <div
                role="alert"
                className="border border-red-400/20 bg-red-400/[0.05] p-3"
              >
                <p className="text-xs leading-5 text-red-200">
                  No pudimos obtener una respuesta de Nexo Industrial AI.
                  Intentá nuevamente.
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={onRetry}
                  className="mt-2 h-7 rounded-sm px-2 text-[11px] text-red-200 hover:bg-red-400/10 hover:text-red-100"
                >
                  <RotateCcw size={12} aria-hidden="true" />
                  Reintentar
                </Button>
              </div>
            ) : null}
          </div>
        )}
        <div ref={endRef} aria-hidden="true" />
      </div>
    </ScrollArea>
  );
}
