import { NextResponse } from "next/server";
import axios from "axios";

const BOT_URL = (process.env.BOT_URL ?? "").replace(/\/$/, "");
const BOT_API_TOKEN = process.env.BOT_API_TOKEN ?? "";

type BotApiResponse = { reply?: string; message?: string; text?: string };

export async function POST(req: Request) {
  if (!BOT_URL || !BOT_API_TOKEN) {
    return NextResponse.json({ message: "Server misconfigured" }, { status: 500 });
  }

  try {
    const { message, userId } = (await req.json()) as { message?: string; userId?: string };
    if (!message || typeof message !== "string") {
      return NextResponse.json({ message: "Invalid message" }, { status: 400 });
    }

    const r = await axios.post<BotApiResponse>(
      `${BOT_URL}/chat`,
      { message, user_id: userId ?? "frontend-user" },
      {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${BOT_API_TOKEN}` },
        timeout: 15_000,
        validateStatus: () => true,
      }
    );

    if (r.status >= 200 && r.status < 300) {
      const reply = r.data?.reply ?? r.data?.message ?? r.data?.text ?? "No reply from bot";
      return NextResponse.json({ reply });
    }
    return NextResponse.json({ message: r.data?.message ?? r.statusText }, { status: r.status || 500 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unexpected error";
    console.error("Bot API error:", msg);
    return NextResponse.json({ message: msg }, { status: 502 });
  }
}