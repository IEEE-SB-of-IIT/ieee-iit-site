import { prisma } from "@/lib/db";
import Link from "next/link";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import DeleteEventButton from "@/components/admin/DeleteEventButton";

const SOCIETY_COLORS: Record<string, string> = {
  CS: "bg-amber-50 text-amber-700",
  RAS: "bg-red-50 text-red-700",
  WIE: "bg-purple-50 text-purple-700",
  CIS: "bg-cyan-50 text-cyan-700",
  EMBS: "bg-violet-50 text-violet-700",
  SB: "bg-blue-50 text-blue-700",
};

export default async function AdminEventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {events.length} events total
          </p>
        </div>
        <Link
          href="/admin/events/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#00629B] text-white text-sm font-semibold hover:bg-[#004d7a] transition-colors"
        >
          <PlusCircle size={16} />
          New Event
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">
                Event
              </th>
              <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3 hidden md:table-cell">
                Date
              </th>
              <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">
                Society
              </th>
              <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">
                Type
              </th>
              <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr
                key={event.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-900">
                    {event.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate max-w-xs">
                    {event.slug}
                  </p>
                </td>
                <td className="px-5 py-4 hidden md:table-cell">
                  <span className="text-sm text-gray-600">
                    {event.date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </td>
                <td className="px-5 py-4 hidden sm:table-cell">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                      SOCIETY_COLORS[event.society] || SOCIETY_COLORS.SB
                    }`}
                  >
                    {event.society}
                  </span>
                </td>
                <td className="px-5 py-4 hidden lg:table-cell">
                  <span className="text-xs text-gray-400">
                    {event.isAllDay
                      ? "All Day"
                      : `${event.startTime} - ${event.endTime}`}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/events/${event.id}/edit`}
                      className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Pencil size={15} />
                    </Link>
                    <DeleteEventButton eventId={event.id} eventName={event.name} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
