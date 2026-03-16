import EventForm from "@/components/admin/EventForm";

export default function NewEventPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create Event</h1>
        <p className="text-sm text-gray-400 mt-0.5">
          Add a new event to the calendar
        </p>
      </div>
      <EventForm mode="create" />
    </div>
  );
}
