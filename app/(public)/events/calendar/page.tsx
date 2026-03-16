import { getAllEvents } from "@/lib/events";
import CalendarPageClient from "./CalendarPageClient";

export default async function EventsCalendarPage() {
  const events = await getAllEvents();
  return <CalendarPageClient events={events} />;
}
