import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { z } from "zod";

const createEventSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  description: z.string().min(1),
  date: z.string(),
  startTime: z.string().nullable().optional(),
  endTime: z.string().nullable().optional(),
  isAllDay: z.boolean().default(true),
  society: z.enum(["CS", "RAS", "WIE", "CIS", "EMBS", "SB"]),
  coverImage: z.string().url(),
  headerImage: z.string().url().nullable().optional(),
  images: z.array(z.string().url()).default([]),
  location: z.string().nullable().optional(),
  registrationLink: z.string().url().nullable().optional(),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const weekStart = searchParams.get("weekStart");
  const weekEnd = searchParams.get("weekEnd");

  const where =
    weekStart && weekEnd
      ? { date: { gte: new Date(weekStart), lte: new Date(weekEnd) } }
      : {};

  const events = await prisma.event.findMany({
    where,
    orderBy: { date: "desc" },
  });

  const parsed = events.map((e) => ({ ...e, images: JSON.parse(e.images) }));
  return NextResponse.json(parsed);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const result = createEventSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const data = result.data;
  const event = await prisma.event.create({
    data: {
      slug: data.slug,
      name: data.name,
      description: data.description,
      date: new Date(data.date),
      startTime: data.startTime ?? null,
      endTime: data.endTime ?? null,
      isAllDay: data.isAllDay,
      society: data.society,
      coverImage: data.coverImage,
      headerImage: data.headerImage ?? null,
      images: JSON.stringify(data.images),
      location: data.location ?? null,
      registrationLink: data.registrationLink ?? null,
    },
  });

  return NextResponse.json(event, { status: 201 });
}
