"use client";

import React from "react";
import { motion } from "motion/react";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 30,
}: AnimatedSectionProps) => {
    const directionMap = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
    };

    const offset = directionMap[direction];

    return (
        <motion.div
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ willChange: "opacity, transform" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
