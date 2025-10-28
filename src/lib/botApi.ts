export interface ChatResponse { reply: string }

export async function sendBotMessage(message: string, userId = "frontend-user"): Promise<ChatResponse> {
  if (!message.trim()) return { reply: "Message is empty." };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15_000);
  
  try {
    const res = await fetch("/api/bot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, userId }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data: unknown = await res.json();
    if (!res.ok) {
      const msg = (data as { message?: string })?.message ?? res.statusText ?? "Unknown error";
      return { reply: `Bot error: ${msg}` };
    }

    const reply = (data as { reply?: string })?.reply;
    return typeof reply === "string" ? { reply } : { reply: "Bot error: invalid response" };
  } catch (e: unknown) {
    clearTimeout(timeoutId);
    const msg = e instanceof Error ? e.message : "Network error";
    return { reply: msg };
  }
}