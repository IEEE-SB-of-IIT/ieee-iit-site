"use client";

import React from "react";
import Container from "./ui/Container";
import { counterItems } from "@/constants";
import { cn } from "@/lib/utils";

const Stats = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-ieee-dark text-white">
            <Container>
                {/* Section Title */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white">
                        We are the <span className="text-ieee-blue">IEEE</span> <br />
                        Student Branch of <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-white">IIT</span>
                    </h2>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ieee-light/5 blur-[100px] -z-10 rounded-full" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {counterItems.map((item, index) => {
                        const Icon = item.icon;
                        // Custom shapes for different cards to match reference vibe
                        const isAccent = index === 1; // 2nd card is accent

                        // Shape classes
                        const shapeClass =
                            index === 0 ? "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl" :
                                index === 1 ? "rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl" :
                                    index === 2 ? "rounded-t-[3rem] rounded-b-xl" :
                                        "rounded-br-[4rem] rounded-tl-[2rem] rounded-tr-xl rounded-bl-xl";

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "relative p-8 flex flex-col justify-between min-h-[300px] group transition-all duration-500 hover:-translate-y-2",
                                    shapeClass,
                                    isAccent
                                        ? "bg-ieee-blue text-white shadow-[0_20px_60px_rgba(0,98,155,0.4)]"
                                        : "bg-white text-ieee-dark shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-ieee-light/10 hover:shadow-[0_20px_50px_rgba(0,98,155,0.1)]"
                                )}
                            >
                                {/* Background Decoration */}
                                <div className={cn(
                                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                                    isAccent
                                        ? "bg-gradient-to-br from-white/10 to-transparent"
                                        : "bg-gradient-to-br from-ieee-light/5 to-transparent"
                                )} />

                                <div className="relative z-10">
                                    <h3 className={cn(
                                        "text-2xl font-bold mb-4",
                                        isAccent ? "text-white" : "text-ieee-dark"
                                    )}>
                                        {item.label}
                                    </h3>
                                    <p className={cn(
                                        "text-sm leading-relaxed opacity-80",
                                        isAccent ? "text-white/90" : "text-ieee-dark/70"
                                    )}>
                                        Empowering students through technology and innovation since 2010.
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-end justify-between mt-8">
                                    <div className="flex flex-col">
                                        <span className={cn(
                                            "text-4xl lg:text-5xl font-display font-bold tracking-tight",
                                            isAccent ? "text-white" : "text-ieee-blue"
                                        )}>
                                            {item.value}{item.suffix}
                                        </span>
                                    </div>

                                    {Icon && (
                                        <div className={cn(
                                            "p-3 rounded-full transition-transform duration-500 group-hover:scale-110",
                                            isAccent ? "bg-white/20 text-white" : "bg-ieee-light/10 text-ieee-blue"
                                        )}>
                                            <Icon size={24} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Stats;
