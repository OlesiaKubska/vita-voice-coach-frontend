import axios from "axios";

const botApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BOT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

botApi.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function sendBotMessage(message: string, userId: string = "frontend-user") {
  const res = await botApi.post(
      "/chat",
      { message, user_id: userId }
  );

  return res.data.reply;
}