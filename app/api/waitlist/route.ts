import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.json");

function ensureFileExists() {
  const dir = path.dirname(WAITLIST_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(WAITLIST_FILE)) {
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify([], null, 2));
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    ensureFileExists();

    const data = JSON.parse(fs.readFileSync(WAITLIST_FILE, "utf-8"));

    // Check for duplicates
    if (data.some((entry: { email: string }) => entry.email === email.toLowerCase())) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    data.push({
      email: email.toLowerCase(),
      joinedAt: new Date().toISOString(),
    });

    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(data, null, 2));

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
