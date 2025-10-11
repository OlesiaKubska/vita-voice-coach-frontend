import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BOT_URL;
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    const response = await axios.post(
      `${apiUrl}/chat`,
      { message: "Hello from test API route!", user_id: "test-user" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ success: true, reply: response.data });
  } catch (error: unknown) {
    console.error("Test bot error:", (error as Error).message);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
