import { prisma } from "@/lib/db";
import { CalendarDays, Users, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const totalEvents = await prisma.event.count();
  const totalUsers = await prisma.user.count();

  const now = new Date();
  const upcomingEvents = await prisma.event.findMany({
    where: { date: { gte: now } },
    orderBy: { date: "asc" },
    take: 5,
  });

  const recentEvents = await prisma.event.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const stats = [
    {
      label: "Total Events",
      value: totalEvents,
      icon: CalendarDays,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Admin Users",
      value: totalUsers,
      icon: Users,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Upcoming",
      value: upcomingEvents.length,
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "This Year",
      value: await prisma.event.count({
        where: {
          date: { gte: new Date(now.getFullYear(), 0, 1) },
        },
      }),
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-400 mt-1">
          IEEE IIT Event Management Overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-100 p-5"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}
              >
                <Icon size={20} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-900">
              Upcoming Events
            </h2>
            <Link
              href="/admin/events"
              className="text-xs text-[#00629B] hover:underline"
            >
              View all
            </Link>
          </div>
          {upcomingEvents.length === 0 ? (
            <p className="text-sm text-gray-400">No upcoming events</p>
          ) : (
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/admin/events/${event.id}/edit`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {event.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {event.date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                    {event.society}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recently Added */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-900">Recently Added</h2>
          </div>
          <div className="space-y-3">
            {recentEvents.map((event) => (
              <Link
                key={event.id}
                href={`/admin/events/${event.id}/edit`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {event.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    Created{" "}
                    {event.createdAt.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                  {event.society}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
