"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
    const reduced = useReducedMotion();

    const textContent = (
        <motion.div
            initial={reduced ? false : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: "transform" }}
        >
            <h1 className="font-serif font-semibold text-4xl text-ink leading-[1.1] tracking-tight">
                Websites that
                <br />
                help businesses{"  "}
                <em className="italic  text-forest"> <br /> grow.</em>
            </h1>

            <p className="mt-5 font-sans text-sm text-ink-muted leading-relaxed max-w-xs">
                We design and build custom websites that
                are fast, scalable and made to convert.
            </p>

            <div className="mt-7 flex items-center gap-6">
                <Button label="See our work" href="#work" />
                <Button
                    label="Learn more"
                    href="#about"
                    variant="ghost"
                    arrow="down"
                />
            </div>
        </motion.div>
    );

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Mobile image */}
            <Image
                src="/images/hero/Hero2.png"
                alt="Zuyd Studio - premium web design"
                fill
                className="object-cover object-bottom md:hidden"
                priority
            />

            {/* Desktop Image */}
            <Image
                src="/images/hero/Hero.png"
                alt="Zuyd Studio - premium web design"
                fill
                className="object-cover object-center hidden md:block"
                priority
            />

            {/* Mobile gradient — strong at top where text is, fades to transparent */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream/97 via-cream/85 to-cream/20 z-10 md:hidden" />

            {/* Desktop gradient — strong on left, fades right */}
            <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/60 to-cream/10 z-10 hidden md:block" />
            {/* SVG flowing line — desktop only */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden md:block"
                viewBox="0 0 1440 900"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* Line coming from upper left toward dot */}
                <path
                    d="M 0 870 Q 350 880 670 570"
                    stroke="#B8B4AC"
                    strokeWidth="0.8"
                    fill="none"
                />
                {/* Line going from dot toward laptop */}
                <path
                    d="M 670 570 Q 780 420 1050 310"
                    stroke="#B8B4AC"
                    strokeWidth="0.8"
                    fill="none"
                />
                {/* Green dot at junction */}
                <circle cx="670" cy="570" r="7" fill="#2A4A2E" />
            </svg>

            {/* Content */}
            <Container>
                <div className="relative z-20 flex flex-col  items-start justify-start  min-h-screen pt-28 pb-20 md:justify-center md:pt-24">
                    <div className="max-w-lg">
                        {textContent}
                    </div>
                </div>
            </Container>
        </section>
    );
}

