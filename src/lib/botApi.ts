import axios from "axios";

export interface ChatResponse {
  reply: string;
}

const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function sendBotMessage(
  message: string,
  userId: string = "frontend-user"): Promise<ChatResponse> {
    const res = await axios.post<ChatResponse>(
      `${BOT_URL}/chat`,
      { message, user_id: userId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    console.log("Bot response:", res.data);
    return res.data;
}