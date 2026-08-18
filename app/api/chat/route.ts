import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  safeValidateUIMessages,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { z } from "zod";
import { craneDemoComponentIds } from "@/data/crane-demo-data";
import { createPlantScopeSystemPrompt } from "@/lib/ai/system-prompt";

export const maxDuration = 30;

const model =
  process.env.AI_MODEL ?? "anthropic/claude-haiku-4.5";

const requestSchema = z.object({
  messages: z.array(z.unknown()).min(1).max(60),
  componentId: z.enum(craneDemoComponentIds).nullable().optional(),
});

const clientErrorMessage =
  "No pudimos obtener una respuesta de PlantScope AI. Intentá nuevamente.";

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

function logServerError(label: string, error: unknown) {
  const detail =
    error instanceof Error ? `${error.name}: ${error.message}` : "Error desconocido";
  console.error(`[PlantScope AI] ${label}: ${detail}`);
}

export async function POST(request: Request) {
  if (!process.env.AI_GATEWAY_API_KEY?.trim()) {
    console.error("[PlantScope AI] AI_GATEWAY_API_KEY is not configured.");
    return jsonError(
      "PlantScope AI no está configurado. Contactá al administrador.",
      503,
    );
  }

  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return jsonError("La solicitud de chat no es válida.", 400);
  }

  try {
    const payload = requestSchema.safeParse(requestBody);

    if (!payload.success) {
      return jsonError("La solicitud de chat no es válida.", 400);
    }

    const validatedMessages = await safeValidateUIMessages<UIMessage>({
      messages: payload.data.messages,
    });

    if (!validatedMessages.success) {
      console.warn(
        "[PlantScope AI] Invalid UI messages:",
        validatedMessages.error.message,
      );
      return jsonError("La solicitud de chat no es válida.", 400);
    }

    const result = streamText({
      model,
      instructions: createPlantScopeSystemPrompt(payload.data.componentId),
      messages: await convertToModelMessages(validatedMessages.data),
      temperature: 0.2,
      maxOutputTokens: 700,
      abortSignal: request.signal,
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({
        stream: result.stream,
        originalMessages: validatedMessages.data,
        onError(error) {
          logServerError("Generation failed", error);
          return clientErrorMessage;
        },
      }),
    });
  } catch (error) {
    logServerError("Chat request failed", error);
    return jsonError(clientErrorMessage, 500);
  }
}
