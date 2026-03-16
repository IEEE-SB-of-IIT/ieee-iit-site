import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import EventForm from "@/components/admin/EventForm";

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id } });

  if (!event) return notFound();

  const formData = {
    id: event.id,
    slug: event.slug,
    name: event.name,
    description: event.description,
    date: event.date.toISOString().split("T")[0],
    startTime: event.startTime || "",
    endTime: event.endTime || "",
    isAllDay: event.isAllDay,
    society: event.society,
    coverImage: event.coverImage,
    headerImage: event.headerImage || "",
    images: JSON.parse(event.images) as string[],
    location: event.location || "",
    registrationLink: event.registrationLink || "",
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
        <p className="text-sm text-gray-400 mt-0.5">{event.name}</p>
      </div>
      <EventForm initialData={formData} mode="edit" />
    </div>
  );
}
