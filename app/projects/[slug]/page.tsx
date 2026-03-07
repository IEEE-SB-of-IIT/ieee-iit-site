"use client";

import React, { useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, MapPin, Clock } from "lucide-react";
import { projects } from "@/constants/projectinto";

// Auto-shuffling masonry gallery component
const AnimatedGallery = ({ images, eventName }: { images: string[], eventName: string }) => {
    // If we only have 6 or fewer images, just show them statically
    const [displayImages, setDisplayImages] = React.useState<string[]>(
        images.slice(0, 6)
    );
    // Track which specific index is currently transitioning
    const [transitioningIndex, setTransitioningIndex] = React.useState<number | null>(null);

    React.useEffect(() => {
        // Only shuffle if there are more than 6 images available
        if (images.length <= 6) return;

        const intervalId = setInterval(() => {
            // Pick a random index between 0 and 5 to swap
            const indexToSwap = Math.floor(Math.random() * 6);

            // Start the transition for this specific index
            setTransitioningIndex(indexToSwap);

            setTimeout(() => {
                setDisplayImages(prev => {
                    const newImages = [...prev];
                    // Pick a random image from the available pool that isn't currently displayed
                    const availableImages = images.filter(img => !prev.includes(img));
                    if (availableImages.length > 0) {
                        const randomNewImage = availableImages[Math.floor(Math.random() * availableImages.length)];
                        newImages[indexToSwap] = randomNewImage;
                    }
                    return newImages;
                });
                // End transition
                setTransitioningIndex(null);
            }, 600); // Wait for fade-out/turnover to complete before swapping src

        }, 3000); // Shuffle every 3 seconds

        return () => clearInterval(intervalId);
    }, [images]);

    // Ensure we always render exactly 6 slots using placeholders if lacking images
    const slots = Array(6).fill("/images/image.png");
    displayImages.forEach((img, idx) => {
        if (idx < 6) slots[idx] = img;
    });

    // Helper to determine transition classes for the turnover effect
    const getTransitionClasses = (idx: number) => {
        return transitioningIndex === idx
            ? 'opacity-0 scale-95 rotate-y-90'
            : 'opacity-100 scale-100 rotate-y-0';
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ perspective: "1000px" }}>
            {/* Large featured image (Index 0) */}
            <div className={`col-span-2 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out transform-gpu ${getTransitionClasses(0)}`}>
                <img
                    src={slots[0]}
                    alt={`${eventName} featured`}
                    className="w-full h-full object-cover min-h-[300px] md:min-h-[500px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Smaller secondary images */}
            {slots.slice(1, 3).map((img, idx) => (
                <div
                    key={`top-${idx}`}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out transform-gpu ${getTransitionClasses(idx + 1)}`}
                >
                    <img
                        src={img}
                        alt={`${eventName} gallery ${idx + 2}`}
                        className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            ))}

            {/* Bottom tertiary images */}
            {slots.slice(3, 6).map((img, idx) => (
                <div
                    key={`bottom-${idx}`}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out transform-gpu ${getTransitionClasses(idx + 3)}`}
                >
                    <img
                        src={img}
                        alt={`${eventName} gallery ${idx + 4}`}
                        className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            ))}
        </div>
    );
};

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

    const getOrganizer = (slug: string) => {
        const _slug = slug.toLowerCase();
        if (['techtrek', 'micromaze', 'tracktion', 'robotnexus-2', 'robot-nexus'].includes(_slug)) {
            return "IEEE RAS of IIT";
        }
        if (['ignite'].includes(_slug)) {
            return "IEEE EMBS of IIT";
        }
        if (['coderally-5', 'webspire-2', 'webspire', 'industpro-4', 'industpro-3'].includes(_slug)) {
            return "IEEE CS of IIT";
        }
        if (['sherlock-2', 'sherlock'].includes(_slug)) {
            return "IEEE WIE of IIT";
        }
        return "IEEE Student Branch of IIT";
    };

    const organizer = getOrganizer(event.slug);

    const galleryImages = event.images && event.images.length > 0 ? event.images : Array(6).fill("/images/image.png");
    const headerImage = event.headerImage || event.coverImage || "/images/image.png";

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
                        src={headerImage}
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
                                                {organizer}
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

                        {/* Dynamic Masonry-style image grid with auto-shuffle */}
                        <AnimatedGallery images={galleryImages} eventName={event.name} />
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
