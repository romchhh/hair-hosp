import { NextResponse } from "next/server";

type Payload = {
  name: string;
  phone: string;
  email: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const { name, phone, email } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN || "";
    const chatId = process.env.TELEGRAM_CHAT_ID || "";

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Telegram credentials are not configured on the server" },
        { status: 500 }
      );
    }

    const text = `📝 Nowa konsultacja\n\nImię: ${name}\nTelefon: ${phone}\nEmail: ${email}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const tgRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      cache: "no-store",
    });

    const json = await tgRes.json();
    if (!tgRes.ok || !json.ok) {
      return NextResponse.json({ ok: false, error: json.description || "Telegram error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}


