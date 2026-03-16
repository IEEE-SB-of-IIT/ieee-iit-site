"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "./ImageUploader";
import { X, Save, Plus } from "lucide-react";
import Image from "next/image";

interface EventFormData {
  id?: string;
  slug: string;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  isAllDay: boolean;
  society: string;
  coverImage: string;
  headerImage: string;
  images: string[];
  location: string;
  registrationLink: string;
}

interface EventFormProps {
  initialData?: EventFormData;
  mode: "create" | "edit";
}

const SOCIETIES = [
  { value: "CS", label: "Computer Society" },
  { value: "RAS", label: "Robotics & Automation" },
  { value: "WIE", label: "Women in Engineering" },
  { value: "CIS", label: "Computational Intelligence" },
  { value: "EMBS", label: "Medicine & Biology" },
  { value: "SB", label: "Student Branch" },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function EventForm({ initialData, mode }: EventFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [galleryUrlInput, setGalleryUrlInput] = useState("");

  const [form, setForm] = useState<EventFormData>(
    initialData ?? {
      slug: "",
      name: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      isAllDay: true,
      society: "SB",
      coverImage: "",
      headerImage: "",
      images: [],
      location: "",
      registrationLink: "",
    }
  );

  const updateField = useCallback(
    <K extends keyof EventFormData>(key: K, value: EventFormData[K]) => {
      setForm((prev) => {
        const next = { ...prev, [key]: value };
        if (key === "name" && mode === "create") {
          next.slug = slugify(value as string);
        }
        return next;
      });
    },
    [mode]
  );

  const addGalleryUrl = useCallback(() => {
    if (galleryUrlInput.trim()) {
      setForm((prev) => ({ ...prev, images: [...prev.images, galleryUrlInput.trim()] }));
      setGalleryUrlInput("");
    }
  }, [galleryUrlInput]);

  const removeGalleryImage = useCallback((index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const payload = {
        slug: form.slug,
        name: form.name,
        description: form.description,
        date: form.date,
        startTime: form.isAllDay ? null : form.startTime || null,
        endTime: form.isAllDay ? null : form.endTime || null,
        isAllDay: form.isAllDay,
        society: form.society,
        coverImage: form.coverImage,
        headerImage: form.headerImage || null,
        images: form.images,
        location: form.location || null,
        registrationLink: form.registrationLink || null,
      };

      const url =
        mode === "create" ? "/api/events" : `/api/events/${form.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error?.fieldErrors ? "Validation failed" : "Save failed");
      }

      router.push("/admin/events");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      {error && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Name + Slug */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Event Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
            placeholder="Event name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Slug *
          </label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => updateField("slug", e.target.value)}
            required
            pattern="^[a-z0-9-]+$"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B] font-mono"
            placeholder="event-slug"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Description *
        </label>
        <textarea
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
          required
          rows={5}
          className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B] resize-y"
          placeholder="Describe the event..."
        />
      </div>

      {/* Date + Time */}
      <div className="space-y-3">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Date *
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => updateField("date", e.target.value)}
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Society *
            </label>
            <select
              value={form.society}
              onChange={(e) => updateField("society", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
            >
              {SOCIETIES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.isAllDay}
              onChange={(e) => updateField("isAllDay", e.target.checked)}
              className="rounded border-gray-300 text-[#00629B] focus:ring-[#00629B]/20"
            />
            <span className="text-sm text-gray-700">All-day event</span>
          </label>
        </div>

        {!form.isAllDay && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Start Time
              </label>
              <input
                type="time"
                value={form.startTime}
                onChange={(e) => updateField("startTime", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                End Time
              </label>
              <input
                type="time"
                value={form.endTime}
                onChange={(e) => updateField("endTime", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
              />
            </div>
          </div>
        )}
      </div>

      {/* Location + Registration Link */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Location
          </label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
            placeholder="Event venue"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Registration Link
          </label>
          <input
            type="url"
            value={form.registrationLink}
            onChange={(e) => updateField("registrationLink", e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
            placeholder="https://..."
          />
        </div>
      </div>

      {/* Images */}
      <div className="grid md:grid-cols-2 gap-4">
        <ImageUploader
          value={form.coverImage}
          onChange={(url) => updateField("coverImage", url)}
          label="Cover Image *"
        />
        <ImageUploader
          value={form.headerImage}
          onChange={(url) => updateField("headerImage", url)}
          label="Header Image"
        />
      </div>

      {/* Gallery */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Gallery Images
        </label>

        {/* URL Input */}
        <div className="flex gap-2 mb-3">
          <input
            type="url"
            value={galleryUrlInput}
            onChange={(e) => setGalleryUrlInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addGalleryUrl())}
            placeholder="Paste image URL and click Add..."
            className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
          />
          <button
            type="button"
            onClick={addGalleryUrl}
            disabled={!galleryUrlInput.trim()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00629B] text-white text-sm font-medium hover:bg-[#004d7a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        {/* Image Grid */}
        {form.images.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {form.images.map((url, i) => (
              <div
                key={i}
                className="relative h-24 rounded-lg overflow-hidden border border-gray-200 group"
              >
                <Image
                  src={url}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(i)}
                  className="absolute top-1 right-1 p-1 bg-white rounded-full shadow-sm hover:bg-red-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={12} className="text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}

        {form.images.length === 0 && (
          <p className="text-xs text-gray-400">No gallery images added yet</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00629B] text-white text-sm font-semibold hover:bg-[#004d7a] disabled:opacity-50 transition-colors cursor-pointer"
        >
          <Save size={16} />
          {saving
            ? "Saving..."
            : mode === "create"
            ? "Create Event"
            : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
