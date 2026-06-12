"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Logo = {
    name: string;
    src: string;
};

interface LogoCarouselProps {
    logos: Logo[];
    visibleCount?: number;
    interval?: number;
    logoHeight?: string;
    gap?: string;
}

export default function LogoCarousel({
    logos,
    visibleCount = 1,
    interval = 2500,
    logoHeight = "h-50",
    gap = "gap-20",
}: LogoCarouselProps) {
    const [startIndex, setStartIndex] = useState(0);
    const shouldRotate = logos.length > visibleCount;

    useEffect(() => {
        if (!shouldRotate) return;
        const timer = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % logos.length);
        }, interval);
        return () => clearInterval(timer);
    }, [shouldRotate, interval, logos.length]);

    const visibleLogos = shouldRotate
        ? Array.from({ length: visibleCount }, (_, i) =>
            logos[(startIndex + i) % logos.length]
        )
        : logos;

    return (
        <div className="relative overflow-hidden">
            <div className={`flex items-center justify-center ${gap}`}>
                <AnimatePresence mode="popLayout" initial={false}>
                    {visibleLogos.map((logo) => (
                        <motion.div
                            layout
                            key={logo.name}
                            initial={shouldRotate ? { opacity: 0, x: 48 } : false}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -48 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex-shrink-0"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className={`${logoHeight} w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}