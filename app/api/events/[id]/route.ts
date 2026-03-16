import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id } });
  if (!event)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ...event, images: JSON.parse(event.images) });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();

  const event = await prisma.event.update({
    where: { id },
    data: {
      ...(body.slug !== undefined && { slug: body.slug }),
      ...(body.name !== undefined && { name: body.name }),
      ...(body.description !== undefined && { description: body.description }),
      ...(body.date !== undefined && { date: new Date(body.date) }),
      ...(body.startTime !== undefined && { startTime: body.startTime }),
      ...(body.endTime !== undefined && { endTime: body.endTime }),
      ...(body.isAllDay !== undefined && { isAllDay: body.isAllDay }),
      ...(body.society !== undefined && { society: body.society }),
      ...(body.coverImage !== undefined && { coverImage: body.coverImage }),
      ...(body.headerImage !== undefined && { headerImage: body.headerImage }),
      ...(body.images !== undefined && {
        images: JSON.stringify(body.images),
      }),
      ...(body.location !== undefined && { location: body.location }),
      ...(body.registrationLink !== undefined && {
        registrationLink: body.registrationLink,
      }),
    },
  });

  return NextResponse.json({ ...event, images: JSON.parse(event.images) });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await prisma.event.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
