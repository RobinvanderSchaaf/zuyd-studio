"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../ui/Container";

type Logo = {
    name: string;
    src: string;
};

const allLogos: Logo[] = [
    { name: "Van Dijk Bouw", src: "/images/logos/van-dijk.png" },
    { name: "The Oche", src: "/images/logos/Oche.png" },
    { name: "Origin", src: "/images/logos/Origin.png" },
    // { name: "Nordic Studio",      src: "/images/logos/nordic.png"     },
    // { name: "Limburg Fysio",      src: "/images/logos/limburg.png"    },
    // { name: "Valkenburg Retreat", src: "/images/logos/valkenburg.png" },
    // { name: "Client 7",           src: "/images/logos/client-7.png"   },
    // { name: "Client 8",           src: "/images/logos/client-8.png"   },
    // { name: "Client 9",           src: "/images/logos/client-9.png"   },
    // { name: "Client 10",          src: "/images/logos/client-10.png"  },
];

const INTERVAL_MS = 2500;

export default function TrustBar() {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const update = () => {
            setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Interval lives inside effect — always has fresh visibleCount
    useEffect(() => {
        const shouldRotate = allLogos.length > visibleCount;
        if (!shouldRotate) {
            setStartIndex(0);
            return;
        }
        const timer = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % allLogos.length);
        }, INTERVAL_MS);
        return () => clearInterval(timer);
    }, [visibleCount]);

    const shouldRotate = allLogos.length > visibleCount;

    const visibleLogos = shouldRotate
        ? Array.from({ length: visibleCount }, (_, i) =>
            allLogos[(startIndex + i) % allLogos.length]
        )
        : allLogos;

    return (
        <section className="py-6 md:py-10 border-t border-cream-border bg-cream-dark">
            <Container>

                <p className="text-center text-md font-sans font-medium tracking-[0.2em] uppercase text-ink-muted mb-8">
                    Trusted by Ambitious Businesses
                </p>

                <div className="relative w-full overflow-hidden">
                    <div className="flex items-center justify-center gap-x-16 md:gap-x-24 min-h-[64px]">
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
                                        className="h-12 md:h-16 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

            </Container>
        </section>
    );
}