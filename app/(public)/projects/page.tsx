import { getAllEvents } from "@/lib/events";
import ProjectsPageClient from "./ProjectsPageClient";

export default async function ProjectsPage() {
  const events = await getAllEvents();
  return <ProjectsPageClient events={events} />;
}
