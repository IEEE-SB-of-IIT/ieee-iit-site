import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Project } from "@/lib/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Parse event date strings like "September 24, 2025" into Date objects.
 */
export function parseEventDate(dateString: string): Date {
  const d = new Date(dateString);
  if (isNaN(d.getTime())) {
    return new Date();
  }
  return d;
}

/**
 * Calculate the number of days from today until the given event date.
 * Negative values mean the event is in the past. 0 means today.
 */
export function getDaysUntil(dateString: string): number {
  const eventDate = parseEventDate(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return Math.round((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

/**
 * Get the N most recent past events, sorted newest first.
 */
export function getLatestEvents(events: Project[], count: number): Project[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => parseEventDate(e.date) <= today)
    .sort((a, b) => parseEventDate(b.date).getTime() - parseEventDate(a.date).getTime())
    .slice(0, count);
}
