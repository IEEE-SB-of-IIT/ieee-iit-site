"use client";

import React, { useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, MapPin, Clock } from "lucide-react";
import { projects } from "@/constants/projectinto";

const EventDetailPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    const event = useMemo(
        () => projects.find((p) => p.slug === slug),
        [slug]
    );

    if (!event) {
        notFound();
    }

    // Use the placeholder image and create a gallery of 6
    const galleryImages = Array(6).fill("/images/image.png");

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] bg-blue-500/15 rounded-full mix-blend-multiply filter blur-[140px] opacity-50" />
                <div className="absolute top-[30%] -right-[15%] w-[45vw] h-[45vw] bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-50" />
                <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-sky-400/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-40" />
            </div>

            <div className="relative z-10">
                {/* Hero section */}
                <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
                    <img
                        src="/images/image.png"
                        alt={event.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 via-transparent to-transparent" />

                    {/* Back button */}
                    <Link
                        href="/projects"
                        className="absolute top-32 md:top-40 left-6 md:left-12 flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white/90 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        All Events
                    </Link>

                    {/* Hero content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-7xl mx-auto">
                            {/* Date badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white/90 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 mb-5">
                                <Calendar size={14} className="text-[#5cc8ff]" />
                                {event.date}
                            </div>

                            {/* Event title */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                                {event.name}
                            </h1>

                            {/* Glowing accent line */}
                            <div className="w-24 h-1 bg-gradient-to-r from-[#00629B] via-[#5cc8ff] to-transparent rounded-full shadow-[0_0_20px_rgba(92,200,255,0.4)]" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
                    {/* Description section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        {/* Main description */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2440] mb-6">
                                About This Event
                            </h2>
                            <div className="space-y-4 text-[#2e5e99] text-base md:text-lg leading-relaxed">
                                <p>{event.description}</p>
                                <p>
                                    This event was organized by the IEEE Student Branch of
                                    Informatics Institute of Technology, bringing together
                                    students, professionals, and enthusiasts in a collaborative
                                    environment to push the boundaries of technology and
                                    innovation.
                                </p>
                                <p>
                                    Through hands-on activities, expert sessions, and networking
                                    opportunities, participants gained valuable insights and
                                    practical experience that complement their academic journey.
                                </p>
                            </div>
                        </div>

                        {/* Event info sidebar */}
                        <div className="space-y-4">
                            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0d2440] mb-5">
                                    Event Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#00629B]/10 flex items-center justify-center flex-shrink-0">
                                            <Calendar size={18} className="text-[#00629B]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#2e5e99]/60 font-medium">
                                                Date
                                            </p>
                                            <p className="text-[#0d2440] font-semibold">
                                                {event.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#00629B]/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin size={18} className="text-[#00629B]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#2e5e99]/60 font-medium">
                                                Venue
                                            </p>
                                            <p className="text-[#0d2440] font-semibold">
                                                Informatics Institute of Technology
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#00629B]/10 flex items-center justify-center flex-shrink-0">
                                            <Clock size={18} className="text-[#00629B]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#2e5e99]/60 font-medium">
                                                Organized By
                                            </p>
                                            <p className="text-[#0d2440] font-semibold">
                                                IEEE Student Branch of IIT
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery section */}
                    <div className="mb-20">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d2440] mb-3">
                            Event Gallery
                        </h2>
                        <p className="text-[#2e5e99] mb-10">
                            Highlights and moments captured during the event.
                        </p>

                        {/* Masonry-style image grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Large featured image */}
                            <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
                                <img
                                    src={galleryImages[0]}
                                    alt={`${event.name} gallery 1`}
                                    className="w-full h-full object-cover min-h-[300px] md:min-h-[500px] transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Smaller images */}
                            {galleryImages.slice(1, 3).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={img}
                                        alt={`${event.name} gallery ${idx + 2}`}
                                        className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}

                            {/* Bottom row - 3 equal images */}
                            {galleryImages.slice(3, 6).map((img, idx) => (
                                <div
                                    key={idx + 3}
                                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={img}
                                        alt={`${event.name} gallery ${idx + 4}`}
                                        className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back to events CTA */}
                    <div className="flex justify-center mb-10">
                        <Link href="/projects">
                            <button className="px-8 py-4 bg-gradient-to-r from-[#00629B] to-[#2e5e99] text-white rounded-xl shadow-lg shadow-[#00629B]/30 font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 cursor-pointer">
                                <ArrowLeft size={18} />
                                <span>Back to All Events</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;
