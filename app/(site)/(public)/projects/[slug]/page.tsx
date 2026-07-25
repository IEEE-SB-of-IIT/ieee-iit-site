import { getEventBySlug } from "@/lib/events";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return notFound();
  return <EventDetailClient event={event} />;
}
