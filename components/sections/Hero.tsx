"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LogoCarousel from "../ui/LogoCarousel";
import { FaReact } from "react-icons/fa";
import { CodeBracketSquareIcon, DevicePhoneMobileIcon, CommandLineIcon, CodeBracketIcon, } from "@heroicons/react/24/outline";

const allLogos = [
    { name: "Van Dijk Bouw", src: "/images/logos/van-dijk.png" },
    { name: "The Oche", src: "/images/logos/Oche.png" },
    { name: "Origin", src: "/images/logos/Origin.png" },
];

export default function Hero() {
    const reduced = useReducedMotion();


    {/* Mobile Pills */ }
    const FeaturePills = (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: 0.9,
            }}
            className="mt-8 flex flex-col gap-3"
        >
            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/40 backdrop-blur-md px-4 py-3">
                <CodeBracketIcon className="text-forest h-5 w-5" />
                <span className="text-sm font-medium text-ink">
                    100% Custom Built
                </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/40 backdrop-blur-md px-4 py-3">
                <FaReact size={18} className="text-forest" />
                <span className="text-sm font-medium text-ink">
                    Next.js & React
                </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/40 backdrop-blur-md px-4 py-3">
                <DevicePhoneMobileIcon className="text-forest h-5 w-5" />
                <span className="text-sm font-medium text-ink">
                    Mobile First
                </span>
            </div>
        </motion.div>
    );

    {/* Hero Text */ }
    const textContent = (
        <motion.div
            initial={reduced ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: "transform" }}
        >
            <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] tracking-tight">
                Websites that help
                <br />
                businesses{" "}
                <em className="italic text-forest">grow.</em>
            </h1>

            <p className="mt-6 font-sans text-md md:text-base text-ink-muted leading-relaxed max-w-xs">
                We design and build custom websites that are fast, scalable and made
                to convert.
            </p>

            <div className="mt-8 flex items-center gap-6">
                <Button label="See our work" href="#work" />
                <Button label="Learn more" href="#about" variant="ghost" arrow="down" />
            </div>
            <div className="lg:hidden">
                {FeaturePills}
            </div>

        </motion.div>
    );

    {/*Desktop Panel*/ }
    const FeatureCard = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className="hidden lg:block absolute top-1/2 right-[18%] -translate-y-1/2 z-30"
        >
            <div className="rounded-3xl border border-black/5 bg-white/40 backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] w-60">
                <div className="space-y-5">

                    <div className="flex items-start gap-3">
                        <CodeBracketSquareIcon className="h-5 w-5 text-forest mt-1" />
                        <div>
                            <p className="font-semibold text-xl text-ink">100%</p>
                            <p className="text-sm text-ink-muted">
                                Custom Built
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-black/10" />

                    <div className="flex items-start gap-3">
                        <FaReact className="h-5 w-5 text-forest mt-1" />
                        <div>
                            <p className="font-semibold text-xl text-ink">
                                Next.js
                            </p>
                            <p className="text-sm text-ink-muted">
                                & React
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-black/10" />

                    <div className="flex items-start gap-3">
                        <DevicePhoneMobileIcon className="h-5 w-5 text-forest mt-1" />
                        <div>
                            <p className="font-semibold text-xl text-ink">
                                Mobile
                            </p>
                            <p className="text-sm text-ink-muted">
                                First
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );

    {/* Full hero Content Layout. */ }
    return (
        <section className="relative min-h-screen" style={{ overflow: "clip" }}>

            {/* Mobile image */}
            <Image
                src="/images/hero/Hero2.png"
                alt="Zuyd Studio — premium web design"
                fill
                className="object-cover object-bottom md:hidden"
                priority
            />

            {/* Desktop image */}
            <Image
                src="/images/hero/Hero.png"
                alt="Zuyd Studio — premium web design"
                fill
                className="object-cover object-center hidden md:block"
                priority
            />

            {/* Mobile gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-cream/30 z-10 md:hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F2EB]/40 via-transparent to-transparent" />

            {/* Content */}
            <Container>
                <div className="relative z-30 flex flex-col items-start justify-start min-h-screen pt-28 pb-20 md:justify-center md:pt-24">
                    <div className="max-w-lg">
                        {textContent}
                    </div>
                </div>
            </Container>

            {FeatureCard}

            {/* Mobile trust bar — bottom of hero */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 z-30 md:hidden bg-gradient-to-t from-cream/95 to-transparent pb-6 pt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <p className="text-center text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-ink-muted mb-4">
                    Trusted by ambitious businesses
                </p>
                <LogoCarousel
                    logos={allLogos}
                    visibleCount={1}
                    interval={2000}
                    logoHeight="h-14"
                />
            </motion.div>

        </section>
    );
}