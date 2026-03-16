import { prisma } from "./db";
import type { Project } from "./types";

function toProject(event: any): Project {
  return {
    slug: event.slug,
    name: event.name,
    description: event.description,
    date: new Date(event.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    society: event.society as Project["society"],
    coverImage: event.coverImage,
    headerImage: event.headerImage ?? undefined,
    images: typeof event.images === "string" ? JSON.parse(event.images) : event.images,
  };
}

export async function getAllEvents(): Promise<Project[]> {
  const events = await prisma.event.findMany({
    orderBy: { date: "desc" },
  });
  return events.map(toProject);
}

export async function getEventBySlug(slug: string): Promise<Project | null> {
  const event = await prisma.event.findUnique({ where: { slug } });
  if (!event) return null;
  return toProject(event);
}

export async function getEventsForWeek(weekStart: Date, weekEnd: Date) {
  return prisma.event.findMany({
    where: {
      date: { gte: weekStart, lte: weekEnd },
    },
    orderBy: { date: "asc" },
  });
}

export async function getAllEventsRaw() {
  return prisma.event.findMany({
    orderBy: { date: "desc" },
  });
}
